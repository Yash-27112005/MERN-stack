const Contact = require("../models/contact-model");
const User = require("../models/user-model");

// ? getAllUsers logic

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
// ? getAllContacts logic
const getAllContacts = async (req, res, next) => {
  try {
   const contact = await Contact.find();
  //  console.log(contact);
   if (!contact || contact.length === 0) {
     return res.status(404).json({ message: "No contacts found" });
   }
   return res.status(200).json({ contact });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts };
