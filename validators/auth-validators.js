const { z } = require("zod");

//* Creating the object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, { message: "Name must bt at lest of 2 characters." })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(2, { message: "Email must bt at lest of 2 characters." })
    .max(255, { message: "Email must not be more than 255 characters" }),

  phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone Number must bt at lest of 10 characters." })
    .max(10, { message: "Phone Number must not be more than 10 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "password must bt at lest of 7 characters." })
    .max(1024, { message: "password must not be more than 1024 characters" }),
});

module.exports = signupSchema;
