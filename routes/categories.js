const express = require('express')

const CategoriesService = require('../services/categories.service')
const validateHandler = require('../middlewares/validate.handler')
const { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema } = require('../schemas/categories.schema')

const router = express.Router()
const service = new CategoriesService()

router.get('/', async (req, res) => {
    try {
        const categories = await service.find()
        res.status(200).json(categories)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id_category',
    validateHandler(getCategoriesSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id_category
            const category = await service.findone(id)
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createCategoriesSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newCategory = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newCategory
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id_category',
    validateHandler(getCategoriesSchema, 'params'),
    validateHandler(updateCategoriesSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_category } = req.params
            const body = req.body
            const changeCategory = await service.update(id_category, body)
            res.json({
                message: 'updated',
                data: changeCategory
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id_category',
    validateHandler(getCategoriesSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_category } = req.params
            const categoryDeleted = await service.delete(id_category)
            res.json(categoryDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router