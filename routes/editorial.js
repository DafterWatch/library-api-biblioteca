const express = require('express')

const EditorialService = require('../services/editorial.service')
const validateHandler = require('../middlewares/validate.handler')
const { createEditorialSchema, updateEditorialSchema, getEditorialSchema } = require('../schemas/editorial.schema')

const router = express.Router()
const service = new EditorialService()

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

router.get('/:id_editorial',
    validateHandler(getEditorialSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id_editorial
            const student = await service.findone(id)
            res.status(200).json(student)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createEditorialSchema, 'body'),
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

router.patch('/:id_editorial',
    validateHandler(getEditorialSchema, 'params'),
    validateHandler(updateEditorialSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_editorial } = req.params
            const body = req.body
            const changeStudent = await service.update(id_editorial, body)
            res.json({
                message: 'updated',
                data: changeStudent
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id_editorial',
    validateHandler(getEditorialSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_editorial } = req.params
            const studentDeleted = await service.delete(id_editorial)
            res.json(studentDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router