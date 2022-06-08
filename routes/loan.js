const express = require('express')

const LoanService = require('../services/loan.service')
const validateHandler = require('../middlewares/validate.handler')
const { createLoanSchema, updateLoanSchema, getLoanSchema } = require('../schemas/loan.schema')

const router = express.Router()
const service = new LoanService()

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
    validateHandler(getLoanSchema, 'params'),
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
    validateHandler(createLoanSchema, 'body'),
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
    validateHandler(getLoanSchema, 'params'),
    validateHandler(updateLoanSchema, 'body'),
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
    validateHandler(getLoanSchema, 'params'),
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