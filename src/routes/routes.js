const express = require("express");
const router = express.Router();
const { addUser, fetchAllCVByUser } = require("../controllers/userController");
const { addCV } = require("../controllers/cvController");

router.use(express.json());

// Add user
router.post('/user/add-user', addUser);
router.get("/users/:userId/cvs", fetchAllCVByUser)

// cv routes
router.post('/cv/add-cv', addCV);


module.exports = router;
