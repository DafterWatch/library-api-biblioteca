const express = require('express')

const StudentsService = require('../services/students.service')
const validateHandler = require('../middlewares/validate.handler')
const { createStudentSchema, updateStudentSchema, getStudentSchema } = require('../schemas/students.schema')

const router = express.Router()
const service = new StudentsService()

router.get('/', async (req, res) => {
    try {
        const students = await service.find()
        res.status(200).json(students)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id_student',
    validateHandler(getStudentSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id_student
            const student = await service.findone(id)
            res.status(200).json(student)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createStudentSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newStudent = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newStudent
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id_student',
    validateHandler(getStudentSchema, 'params'),
    validateHandler(updateStudentSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_student } = req.params
            const body = req.body
            const changeStudent = await service.update(id_student, body)
            res.json({
                message: 'updated',
                data: changeStudent
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id_student',
    validateHandler(getStudentSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_student } = req.params
            const studentDeleted = await service.delete(id_student)
            res.json(studentDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router