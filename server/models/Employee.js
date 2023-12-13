module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employee",
    {
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      contact: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "employee",
      timestamps: false,
    }
  );

  return employee;
};
