const db = require("../models");


const doctor =db.Doctor;

const getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctor.findAll({
      limit: 50, 
    });

    res.status(200).send(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).send('Internal Server Error');
  }
};


  
module.exports = {
    getAllDoctors
  };