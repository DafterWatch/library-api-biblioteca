const { Model, DataTypes, Sequelize } = require('sequelize')

const STUDENT_TABLE = 'student'

const StudentSchema = {
    idStudent: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_student',
        type: DataTypes.INTEGER
    },
    passwordStudent: {
        allowNull: false,
        field: 'password_student',
        type: DataTypes.STRING
    },
    nameStudent: {
        allowNull: false,
        field: 'name_student',
        type: DataTypes.STRING
    },
    dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'date_of_birth'
    },
    collegeCareer: {
        allowNull: false,
        field: 'college_career',
        type: DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    mail: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Student extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: STUDENT_TABLE,
            modelName: 'Student',
            timestamps: false
        }
    }
}

module.exports = {
    STUDENT_TABLE,
    StudentSchema,
    Student
}