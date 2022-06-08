const Joi = require('joi')

const id_student = Joi.number()
const password_student = Joi.string()
const name_student = Joi.string()
const date_of_birth = Joi.date()
const college_career = Joi.string()
const phone = Joi.string()
const mail = Joi.string().email()

const createStudentSchema = Joi.object({
    passwordStudent: password_student.required(),
    nameStudent: name_student.required(),
    dateOfBirth: date_of_birth.required(),
    collegeCareer: college_career.required(),
    phone: phone.required(),
    mail: mail.required(),
})

const updateStudentSchema = Joi.object({
    passwordStudent: password_student,
    nameStudent: name_student,
    dateOfBirth: date_of_birth,
    collegeCareer: college_career,
    phone,
    mail,
})

const getStudentSchema = Joi.object({
    id_student: id_student.required()
})

module.exports = {
    createStudentSchema,
    updateStudentSchema,
    getStudentSchema
}