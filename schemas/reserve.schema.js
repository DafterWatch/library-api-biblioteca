const Joi = require('joi')

const id = Joi.number()
const id_book = Joi.number()
const id_student = Joi.number()
const reservation = Joi.date()

const createReserveSchema = Joi.object({
    idBook: id_book.required(),
    idStudent: id_student.required(),
    reservation: reservation.required(),
})

const updateReserveSchema = Joi.object({
    idBook: id_book,
    idStudent: id_student,
    reservation
})

const getReserveSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createReserveSchema,
    updateReserveSchema,
    getReserveSchema
}