var mongoose = require("mongoose");
var Data = require("../models/userModel");

exports.addUser = (req, res) => {
  console.log("fdhs", req.body);
  const { firstname, lastname, age, college, university, address } = req.body;
  const newData = new Data({
    firstname,
    lastname,
    age,
    college,
    university,
    address,
  });
  newData
    .save()
    .then((data) => {
      res.status(200).json({
        message: "A Data was successfully created",
        //created_data: { _id: data._id, data: data.data },
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: {
          msgBody: "An error has occurred whilst creating a new Data.",
          msgError: true,
          err,
        },
      });
    });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Data.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const result = await Data.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Data.findByIdAndDelete(req.params.id); // Delete user by ID
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};

// var mongoose = require("mongoose");
// var Data = require("../models/userModel");
// exports.addUser = (req, res) => {
//   console.log("fdhs", req.body);
//   const { firstname, lastname, age, college, university, address } = req.body;
//   const newData = new Data({
//     firstname,
//     lastname,
//     age,
//     college,
//     university,
//     address,
//   });
//   newData
//     .save()
//     .then((data) => {
//       res.status(200).json({
//         message: "A Data was successfully created",
//         //created_data: { _id: data._id, data: data.data },
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: {
//           msgBody: "An error has occurred whilst creating a new Data.",
//           msgError: true,
//           err,
//         },
//       });
//     });
// };
