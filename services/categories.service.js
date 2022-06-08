const faker = require('faker')
const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')
const { Categories } = require('../db/models/categories.model')

class CategoriesService {
    constructor() {
    }
    async create(data) {
        const students = await models.Categories.create(data);
        return students
    }
    async find() {
        const students = await (await models.Categories.findAll())
        return students
    }
    async findone(id_category) {
        const student = await models.Categories.findOne({ where: { id_category: id_category } })
        if (student === null) {
            throw boom.notFound('Category not found')
        }
        return student
    }
    async update(id_category, changes) {
        let student = await models.Categories.update(
            changes, { where: { id_category: id_category } }
        )
        student = await models.Categories.findOne({ where: { id_category: id_category } })
        return student
    }
    async delete(id_category) {
        const student = await models.Categories.destroy({ where: { id_category: id_category } })
        console.log(student)
        return {
            message: 'deleted',
            id_category
        }
    }
}

module.exports = CategoriesService