const { Model, DataTypes, Sequelize } = require('sequelize')

const EDITORIAL_TABLE = 'editorial'

const EditorialSchema = {
    idEditorial: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_editorial',
        type: DataTypes.INTEGER
    },
    nameEditorial: {
        allowNull: false,
        field: 'name_editorial',
        type: DataTypes.STRING
    },
    direction: {
        allowNull: false,
        field: 'direction',
        type: DataTypes.STRING
    },
    contactPhone: {
        allowNull: false,
        field: 'contact_phone',
        type: DataTypes.STRING
    },
}

class Editorial extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: EDITORIAL_TABLE,
            modelName: 'Editorial',
            timestamps: false
        }
    }
}

module.exports = {
    EDITORIAL_TABLE,
    EditorialSchema,
    Editorial
}