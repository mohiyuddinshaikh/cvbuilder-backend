const express = require("express");
const router = express.Router();
const { addUser, fetchAllCVByUser } = require("../controllers/userController");
const {
  addCV,
  deleteCV,
  createNewCV,
  updateCV,
} = require("../controllers/cvController");

router.use(express.json());

//  user routes
router.post("/user/add-user", addUser);
router.get("/users/:userId/cvs", fetchAllCVByUser);

// cv routes
router.post("/cv/add-cv", addCV);
router.post("/cv/:cvId/update-cv", updateCV);
router.delete("/cv/:cvId", deleteCV);
router.post("/cvs/:cvId/delete-and-create-new", createNewCV);

module.exports = router;
