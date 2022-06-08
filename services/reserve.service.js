const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Reserve } = require('../db/models/reserve.model')

class ReserveService {
    constructor() {
    }
    async create(data) {
        const students = await models.Reserve.create(data);
        return students
    }
    async find() {
        const students = await (await models.Reserve.findAll())
        return students
    }
    async findone(id) {
        const student = await models.Reserve.findOne({ where: { id: id } })
        if (student === null) {
            throw boom.notFound('Reserve not found')
        }
        return student
    }
    async update(id, changes) {
        let student = await models.Reserve.update(
            changes, { where: { id: id } }
        )
        student = await models.Reserve.findOne({ where: { id: id } })
        return student
    }
    async delete(id) {
        const student = await models.Reserve.destroy({ where: { id: id } })
        console.log(student)
        return {
            message: 'deleted',
            id
        }
    }
}

module.exports = ReserveService