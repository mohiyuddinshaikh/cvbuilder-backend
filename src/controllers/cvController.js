const CV = require("../models/CV");

exports.addCV = async (req, res) => {
    const { userId } = req.body;
    // {
    //     "userId": "64ad780bce5a19ea34002bff"
    // }

    try {
      const existingCV = await CV.findOne({ userId, isCompleted: false });
  
      if (existingCV) {
        return res.status(400).json({ message: "You already have an existing CV." });
      } else {
        const newCV = new CV({ userId });
        const savedCV = await newCV.save();
  
        return res.status(201).json({ cvId: savedCV._id });
      }
    } catch (err) {
      return res.status(500).json({ message: `An error occurred while creating the CV: ${err}` });
    }
};


