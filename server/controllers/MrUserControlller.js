const db = require("../models");

const MrUser = db.MrUser;

const addUser = async (req, res) => {
  try {
    const info = {
      mrusername: req.body.username, 
      mrfname: req.body.firstName,
      mrlname: req.body.lastName,
      mrpassword: req.body.password,
      mrcontactno: req.body.mrcontactno,
      mremailid: req.body.email,
      mraddress: req.body.address,
      mrjoingdate: req.body.joingdate,
    };

    const mruser = await MrUser.create(info);
    res.status(200).send(mruser);
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


const getAllUsers = async (req, res) => {
  let users = await MrUser.findAll({});
  res.status(200).send(users);
};

const updateMRUser = async (req, res) => {
  const id = req.params.id;
  const updateUser = await MrUser.update(req.body, { where: { mrid: id } });
  res.status(200).send(updateUser);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;

 
  await MrUser.destroy({ where: { mrid: id } });

  res.status(200).send("MrUser is deleted");
};

module.exports = {
  addUser,
  getAllUsers,
  updateMRUser,
  deleteUser
};
