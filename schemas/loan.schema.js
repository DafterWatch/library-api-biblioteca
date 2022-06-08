const Joi = require('joi')

const id = Joi.number()
const id_book = Joi.number()
const id_student = Joi.number()
const deliver_date = Joi.date()
const return_date = Joi.date()

const createLoanSchema = Joi.object({
    idBook: id_book.required(),
    idStudent: id_student.required(),
    deliverDate: deliver_date.required(),
    returnDate: return_date.required()
})

const updateLoanSchema = Joi.object({
    idBook: id_book,
    idStudent: id_student,
    deliverDate: deliver_date,
    returnDate: return_date
})

const getLoanSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createLoanSchema,
    updateLoanSchema,
    getLoanSchema
}