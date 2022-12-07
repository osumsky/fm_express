const User = require('../models/User');

module.exports.createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.showUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.showUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) res.status(200).send(user);
    else res.status(404).send('user not found');
  } catch (err) {
    res.send(err.message);
  }
};
