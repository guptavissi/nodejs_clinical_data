const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres', {
    dialect: 'postgres',
    logging: false,
});

/*CREATE TABLE patient (
  id SERIAL PRIMARY KEY,
  patient_id VARCHAR(100),
  from_healthkit_sync BOOLEAN,
  orgId VARCHAR(100),
  timestamp TIMESTAMP
);*/

const Patient = sequelize.define('patient', {
    patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    from_healthkit_sync: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    orgId: {
        type: DataTypes.STRING,

    },
    timestamp: {
        type: DataTypes.DATE,
    },
},{
    freezeTableName: true,
    timestamps: false
});

/*CREATE TABLE clinical_data (
    id SERIAL PRIMARY KEY,
    patient_id VARCHAR(100),
    test_type VARCHAR(100),
    test_name VARCHAR(100),
    uom VARCHAR(100),
    value VARCHAR(100),
    on_date TIMESTAMP
);*/

const ClinicalData = sequelize.define('clinical_data', {
    patient_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    test_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    test_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    uom: {
        type: DataTypes.STRING,
        defaultValue: "",
    },
    value: {
        type: DataTypes.STRING,
    },
    on_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            customCheck(value) {
                if (this.value && !value) {
                    throw new Error('on_date is required if value is provided');
                }
            }
        },
    },
},
{
    freezeTableName: true,
    timestamps: false    
}
);

module.exports = { Patient, ClinicalData,sequelize:sequelize }