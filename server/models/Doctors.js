module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define(
      "doctor",
      {
        docid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        docfname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        doclname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hospitalname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mobno: {
          type: DataTypes.STRING,
        },
        landlineno: {
          type: DataTypes.STRING,
        },
        emailid: {
          type: DataTypes.STRING,
        },
        website: {
          type: DataTypes.STRING,
        },
        specialization: {
          type: DataTypes.STRING,
        },
        state: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        area: {
          type: DataTypes.STRING,
        },
        street: {
          type: DataTypes.STRING,
        },
        landmark: {
          type: DataTypes.STRING,
        },
        address1: {
          type: DataTypes.STRING,
        },
        address2: {
          type: DataTypes.STRING,
        },
        pincode: {
          type: DataTypes.STRING,
        },
        regDate: {
          type: DataTypes.DATE,
        },
        dob: {
          type: DataTypes.DATE,
        },
        doa: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "doctors",
        timestamps: false,
      }
    );
  
    return Doctor;
  };
  