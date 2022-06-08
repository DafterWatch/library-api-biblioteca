const express = require('express')

const ReserveService = require('../services/reserve.service')
const validateHandler = require('../middlewares/validate.handler')
const { createReserveSchema, updateReserveSchema, getReserveSchema } = require('../schemas/reserve.schema')

const router = express.Router()
const service = new ReserveService()

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

router.get('/:id',
    validateHandler(getReserveSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const student = await service.findone(id)
            res.status(200).json(student)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createReserveSchema, 'body'),
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

router.patch('/:id',
    validateHandler(getReserveSchema, 'params'),
    validateHandler(updateReserveSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeStudent = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeStudent
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getReserveSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const studentDeleted = await service.delete(id)
            res.json(studentDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router