const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Author } = require('../db/models/author.model')

class AuthorService {
    constructor() {
    }
    async create(data) {
        const students = await models.Author.create(data);
        return students
    }
    async find() {
        const students = await (await models.Author.findAll())
        return students
    }
    async findone(id_author) {
        const student = await models.Author.findOne({ where: { id_author: id_author } })
        if (student === null) {
            throw boom.notFound('Student not found')
        }
        return student
    }
    async update(id_author, changes) {
        let student = await models.Author.update(
            changes, { where: { id_author: id_author } }
        )
        student = await models.Author.findOne({ where: { id_author: id_author } })
        return student
    }
    async delete(id_author) {
        const student = await models.Author.destroy({ where: { id_author: id_author } })
        return {
            message: 'deleted',
            id_author
        }
    }
}

module.exports = AuthorService