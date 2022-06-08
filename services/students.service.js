const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Student } = require('../db/models/students.model')

class StudentsService {
    constructor() {
    }
    async create(data) {
        const students = await models.Student.create(data);
        return students
    }
    async find() {
        const students = await (await models.Student.findAll())
        return students
    }
    async findone(id_student) {
        const student = await models.Student.findOne({ where: { id_student: id_student } })
        if (student === null) {
            throw boom.notFound('Student not found')
        }
        return student
    }
    async update(id_student, changes) {
        let student = await models.Student.update(
            changes, { where: { id_student: id_student } }
        )
        student = await models.Student.findOne({ where: { id_student: id_student } })
        return student
    }
    async delete(id_student) {
        const student = await models.Student.destroy({ where: { id_student: id_student } })
        console.log(student)
        return {
            message: 'deleted',
            id_student
        }
    }
}

module.exports = StudentsService