const home = async (req, res) => {
  try {
    res.status(200).send("hi im yash in router / controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({
      message: req.body,
    });
  } catch (error) {
    res.status(400).json({ msg: "Page not found" });
  }
};
module.exports = { home, register };
