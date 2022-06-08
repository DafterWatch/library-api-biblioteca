const Joi = require('joi')

const id_author = Joi.number()
const name_author = Joi.string()
const country = Joi.string()

const createAuthorSchema = Joi.object({
    nameAuthor: name_author.required(),
    country: country.required(),
})

const updateAuthorSchema = Joi.object({
    nameAuthor: name_author,
    country,
})

const getAuthorSchema = Joi.object({
    id_author: id_author.required()
})

module.exports = {
    createAuthorSchema,
    updateAuthorSchema,
    getAuthorSchema
}