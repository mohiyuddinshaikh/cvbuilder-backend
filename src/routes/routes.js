const express = require("express");
const router = express.Router();
const { addUser } = require("../controllers/userController");

router.use(express.json());

// Add user
router.post('/user/add-user', addUser);

module.exports = router;
