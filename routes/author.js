const express = require('express')

const AuthorService = require('../services/author.service')
const validateHandler = require('../middlewares/validate.handler')
const { createAuthorSchema, updateAuthorSchema, getAuthorSchema } = require('../schemas/author.schema')

const router = express.Router()
const service = new AuthorService()

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

router.get('/:id_author',
    validateHandler(getAuthorSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id_author
            const student = await service.findone(id)
            res.status(200).json(student)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createAuthorSchema, 'body'),
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

router.patch('/:id_author',
    validateHandler(getAuthorSchema, 'params'),
    validateHandler(updateAuthorSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_author } = req.params
            const body = req.body
            const changeStudent = await service.update(id_author, body)
            res.json({
                message: 'updated',
                data: changeStudent
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id_author',
    validateHandler(getAuthorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_author } = req.params
            const studentDeleted = await service.delete(id_author)
            res.json(studentDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router