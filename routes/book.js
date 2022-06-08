const express = require('express')

const BookService = require('../services/book.service')
const validateHandler = require('../middlewares/validate.handler')
const { createBookSchema, updateBookSchema, getBookSchema } = require('../schemas/book.schema')

const router = express.Router()
const service = new BookService()

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

router.get('/:id_book',
    validateHandler(getBookSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id_book
            const student = await service.findone(id)
            res.status(200).json(student)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createBookSchema, 'body'),
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

router.patch('/:id_book',
    validateHandler(getBookSchema, 'params'),
    validateHandler(updateBookSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_book } = req.params
            const body = req.body
            const changeStudent = await service.update(id_book, body)
            res.json({
                message: 'updated',
                data: changeStudent
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id_book',
    validateHandler(getBookSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_book } = req.params
            const studentDeleted = await service.delete(id_book)
            res.json(studentDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router