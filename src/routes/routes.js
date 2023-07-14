const express = require("express");
const router = express.Router();
const { addUser, fetchAllCVByUser } = require("../controllers/userController");
const { addCV, deleteCV, createNewCV } = require("../controllers/cvController");

router.use(express.json());

// Add user
router.post("/user/add-user", addUser);
router.get("/users/:userId/cvs", fetchAllCVByUser);

// cv routes
router.post("/cv/add-cv", addCV);
router.delete("/cv/:cvId", deleteCV);
router.post("/cvs/:cvId/delete-and-create-new", createNewCV);

module.exports = router;
