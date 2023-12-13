const db = require("../models");


const MrUser = db.MrUser;
const Doctor = db.Doctor;
const Visit = db.visit;

const getVisit = async (req, res) => {
  try {
    const visitData = await Visit.findAll({
      include: [
        {
          model: MrUser,
          as: "mrAlias",
          attributes: ["mrfname", "mrlname"],
        },
        {
          model: Doctor,
          as: "docAlias",
          attributes: [
            "docfname",
            "doclname",
            "hospitalname",
            "mobno",
            "emailid",
            "specialization",
            "city",
            "area",
            "pincode",
          ],
        },
      ],
      limit: 56,
      raw: true, 
    });

    res.status(200).send(visitData);
  } catch (error) {
    console.error("Error fetching visit data:", error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = {
  getVisit,
};
