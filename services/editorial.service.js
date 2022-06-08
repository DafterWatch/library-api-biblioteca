const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Editorial } = require('../db/models/editorial.model')

class EditorialService {
    constructor() {
    }
    async create(data) {
        const students = await models.Editorial.create(data);
        return students
    }
    async find() {
        const students = await (await models.Editorial.findAll())
        return students
    }
    async findone(id_editorial) {
        const student = await models.Editorial.findOne({ where: { id_editorial: id_editorial } })
        if (student === null) {
            throw boom.notFound('Student not found')
        }
        return student
    }
    async update(id_editorial, changes) {
        let student = await models.Editorial.update(
            changes, { where: { id_editorial: id_editorial } }
        )
        student = await models.Editorial.findOne({ where: { id_editorial: id_editorial } })
        return student
    }
    async delete(id_editorial) {
        const student = await models.Editorial.destroy({ where: { id_editorial: id_editorial } })
        console.log(student)
        return {
            message: 'deleted',
            id_editorial
        }
    }
}

module.exports = EditorialService