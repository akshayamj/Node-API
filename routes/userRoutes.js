const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/addUser", userController.addUser);

router.get("/getAllUsers", userController.getAllUsers);

router.delete("/deleteUser/:id", userController.deleteUser);

router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
