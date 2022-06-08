const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'categories'

const CategorySchema = {
    idCategory: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_category',
        type: DataTypes.INTEGER
    },
    nameCategory: {
        allowNull: false,
        field: 'name_category',
        type: DataTypes.STRING
    }
}

class Category extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Categories',
            timestamps: false
        }
    }
}

module.exports = {
    CATEGORY_TABLE,
    CategorySchema,
    Category
}