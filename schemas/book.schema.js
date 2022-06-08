const Joi = require('joi')

const id_book = Joi.number()
const id_author = Joi.number()
const id_category = Joi.number()
const id_editorial = Joi.number()
const title = Joi.string()
const state_book = Joi.boolean()
const comments_book = Joi.string()

const createBookSchema = Joi.object({
    idAuthor: id_author.required(),
    idCategory: id_category.required(),
    idEditorial: id_editorial.required(),
    title: title.required(),
    stateBook: state_book.required(),
    commentsBook: comments_book.required(),
})

const updateBookSchema = Joi.object({
    idAuthor: id_author,
    idCategory: id_category,
    idEditorial: id_editorial,
    title,
    stateBook: state_book,
    commentsBook: comments_book,
})

const getBookSchema = Joi.object({
    id_book: id_book.required()
})

module.exports = {
    createBookSchema,
    updateBookSchema,
    getBookSchema
}