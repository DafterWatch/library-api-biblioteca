const { Model, DataTypes, Sequelize } = require('sequelize')

const RESERVE_TABLE = 'reserve'

const ReserveSchema = {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idBook: {
        allowNull: false,
        field: 'id_book',
        type: DataTypes.INTEGER
    },
    idStudent: {
        allowNull: false,
        field: 'id_student',
        type: DataTypes.INTEGER
    },
    reservation: {
        allowNull: false,
        type: DataTypes.DATE
    }
}

class Reserve extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: RESERVE_TABLE,
            modelName: 'Reserve',
            timestamps: false
        }
    }
}

module.exports = {
    RESERVE_TABLE,
    ReserveSchema,
    Reserve
}