module.exports = (sequelize, DataTypes) => {
  const visit = sequelize.define(
    "visit",
    {
      vid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      mrid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      docid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,

      },
      feedback: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.TIME,
      },
      type: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }

    },

    {
      tableName: "visit",
      timestamps: false,
    }
  );


  return visit;
};
