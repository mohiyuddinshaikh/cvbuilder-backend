const CV = require("../models/CV");
const User = require("../models/Users");
const { MongoServerError } = require('mongodb');

// Add user
exports.addUser = async (req, res) => {
  try {
    const { userName, email, password, socialId, contactNumber, provider } = req.body;

    let userBody = {}
    if (Number(provider) === 1) {
      userBody.provider = provider
      userBody.userName = userName
      userBody.email = email
      userBody.password = password
      if (contactNumber) {
        userBody.contactNumber = contactNumber
      }
    //   {
    //     "provider": 1,
    //     "userName": "foo",
    //     "email": "mo@mom.comk",
    //     "password": "123456",
    //     "contactNumber": 798789
    // }
    } else if(Number(provider) === 2 || Number(provider) === 3){
      userBody.provider = provider
      userBody.userName = userName
      userBody.email = email
      userBody.socialId = socialId
      if (contactNumber) {
        userBody.contactNumber = contactNumber
      }
    //   {
    //     "provider": 2,
    //     "userName": "foo",
    //     "email": "mo@moms212.co",
    //     "socialId": "somesocialid",
    //     "contactNumber": "98989"
    // }
    }

    const newUser = new User(userBody);
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      res.status(400).json({ error: 'Email address is already registered.' });
    } else {
      res.status(500).json({ error: `An error occurred while adding the user: ${error}` });
    }
  }
};

exports.fetchAllCVByUser = async (req,res) => {
  const { userId } = req.params;
  // http://localhost:3000/users/64ad780bce5a19ea34002bff/cvs
  try {
    const cvs = await CV.find({ userId });
    return res.status(200).json({ cvs });
  } catch (err) {
    return res.status(500).json({ message: "An error occurred while fetching the CVs.", error: err });
  }
}
