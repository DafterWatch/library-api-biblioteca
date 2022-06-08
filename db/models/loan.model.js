const { Model, DataTypes, Sequelize } = require('sequelize')

const LOAN_TABLE = 'loan'

const LoanSchema = {
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
    deliverDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'deliver_date'
    },
    returnDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'return_date'
    }
}

class Loan extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: LOAN_TABLE,
            modelName: 'Loan',
            timestamps: false
        }
    }
}

module.exports = {
    LOAN_TABLE,
    LoanSchema,
    Loan
}