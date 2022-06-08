const Joi = require('joi')

const id_editorial = Joi.number()
const name_editorial = Joi.string()
const direction = Joi.string()
const contact_phone = Joi.string()

const createEditorialSchema = Joi.object({
    nameEditorial: name_editorial.required(),
    direction: direction.required(),
    contactPhone: contact_phone.required(),
})

const updateEditorialSchema = Joi.object({
    nameEditorial: name_editorial,
    direction,
    contactPhone: contact_phone
})

const getEditorialSchema = Joi.object({
    id_editorial: id_editorial.required()
})

module.exports = {
    createEditorialSchema,
    updateEditorialSchema,
    getEditorialSchema
}