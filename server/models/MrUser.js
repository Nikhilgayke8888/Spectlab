module.exports = (sequelize, DataTypes) => {
    const MrUser = sequelize.define('mruser', {
        mrid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        mrusername: {
            type: DataTypes.STRING,
           
        },
        mrfname: {
            type: DataTypes.STRING
        },
        mrlname: {
            type: DataTypes.STRING
        },
        mrpassword: {
            type: DataTypes.STRING
        },
        mrcontactno: {
            type: DataTypes.INTEGER
        },
        mremailid: {
            type: DataTypes.STRING,
        },
        mraddress: {
            type: DataTypes.TEXT
        },
        mrjoingdate: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'mruser',
        timestamps: false
    });

    return MrUser;
};
