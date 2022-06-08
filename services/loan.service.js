const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Loan } = require('../db/models/loan.model')

class LoanService {
    constructor() {
    }
    async create(data) {
        const students = await models.Loan.create(data);
        return students
    }
    async find() {
        const students = await (await models.Loan.findAll())
        return students
    }
    async findone(id) {
        const student = await models.Loan.findOne({ where: { id: id } })
        if (student === null) {
            throw boom.notFound('Student not found')
        }
        return student
    }
    async update(id, changes) {
        let student = await models.Loan.update(
            changes, { where: { id: id } }
        )
        student = await models.Loan.findOne({ where: { id: id } })
        return student
    }
    async delete(id) {
        const student = await models.Loan.destroy({ where: { id: id } })
        console.log(student)
        return {
            message: 'deleted',
            id
        }
    }
}

module.exports = LoanService