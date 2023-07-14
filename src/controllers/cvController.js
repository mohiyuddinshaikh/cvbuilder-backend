const CV = require("../models/CV");

exports.addCV = async (req, res) => {
  const { userId } = req.body;
  // {
  //     "userId": "64ad780bce5a19ea34002bff"
  // }

  try {
    const existingCV = await CV.findOne({ userId, isCompleted: false });

    if (existingCV) {
      return res
        .status(400)
        .json({ message: "You already have an existing CV." });
    } else {
      const newCV = new CV({ userId });
      const savedCV = await newCV.save();

      return res.status(201).json({ cvId: savedCV._id });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: `An error occurred while creating the CV: ${err}` });
  }
};

exports.deleteCV = async (req, res) => {
  const { cvId } = req.params;

  try {
    await CV.findByIdAndDelete(cvId);

    return res.status(200).json({ message: "CV deleted successfully." });
  } catch (err) {
    return res.status(500).json({
      message: "An error occurred while deleting the CV.",
      error: err,
    });
  }
};

exports.createNewCV = async (req, res) => {
  const { cvId } = req.params;
  const { userId } = req.body;
  // http://localhost:3000/cvs/64b0edb74b2bf37dd5baceaa/delete-and-create-new
  //   {
  //     "userId": "64ad780bce5a19ea34002bff"
  // }

  try {
    await CV.findByIdAndDelete(cvId);

    const newCV = new CV({ userId });
    const savedCV = await newCV.save();

    return res.status(201).json({ cvId: savedCV._id });
  } catch (err) {
    // Handle the error
    return res
      .status(500)
      .json({ message: "An error occurred while creating the new CV." });
  }
};

exports.updateCV = async (req, res) => {
  const { cvId } = req.params;
  const updateData = req.body;

  try {
    const updatedCV = await CV.findByIdAndUpdate(cvId, updateData, {
      new: true,
    });

    return res.status(200).json({ cv: updatedCV });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred while updating the CV." });
  }
};
