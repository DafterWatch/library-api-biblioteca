const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Book } = require('../db/models/book.model')

class BookService {
    constructor() {
    }
    async create(data) {
        const students = await models.Book.create(data);
        return students
    }
    async find() {
        const students = await (await models.Book.findAll())
        return students
    }
    async findone(id_book) {
        const student = await models.Book.findOne({ where: { id_book: id_book } })
        if (student === null) {
            throw boom.notFound('Student not found')
        }
        return student
    }
    async update(id_book, changes) {
        let student = await models.Book.update(
            changes, { where: { id_book: id_book } }
        )
        student = await models.Book.findOne({ where: { id_book: id_book } })
        return student
    }
    async delete(id_book) {
        const student = await models.Book.destroy({ where: { id_book: id_book } })
        console.log(student)
        return {
            message: 'deleted',
            id_book
        }
    }
}

module.exports = BookService