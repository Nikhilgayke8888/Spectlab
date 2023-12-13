const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error" + err);
  });

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.MrUser = require("./MrUser.js")(sequelize, DataTypes);
db.visit = require("./visit.js")(sequelize, DataTypes);
db.Doctor = require("./Doctors.js")(sequelize, DataTypes);
db.employee = require("./Employee.js")(sequelize, DataTypes);


db.visit.belongsTo(db.MrUser, {
  foreignKey: 'mrid', 
  as: 'mrAlias'
});


db.visit.hasMany(db.Doctor,{
  foreignKey:'docid',
  as:'docAlias'
})



db.sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("yes re-sunc done!");
  });
module.exports = db;
