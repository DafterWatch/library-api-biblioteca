const Joi = require('joi')

const id_category = Joi.number()
const name_category = Joi.string()

const createCategoriesSchema = Joi.object({
    nameCategory: name_category.required(),
})

const updateCategoriesSchema = Joi.object({
    nameCategory: name_category
})

const getCategoriesSchema = Joi.object({
    id_category: id_category.required()
})

module.exports = {
    createCategoriesSchema,
    updateCategoriesSchema,
    getCategoriesSchema
}