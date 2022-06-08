const { Model, DataTypes, Sequelize } = require('sequelize')

const BOOK_TABLE = 'book'

const BookSchema = {
    idBook: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_book',
        type: DataTypes.INTEGER
    },
    idAuthor: {
        allowNull: false,
        field: 'id_author',
        type: DataTypes.INTEGER
    },
    idCategory: {
        allowNull: false,
        field: 'id_category',
        type: DataTypes.INTEGER
    },
    idEditorial: {
        allowNull: false,
        field: 'id_editorial',
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    stateBook: {
        allowNull: false,
        field: 'state_book',
        type: DataTypes.BOOLEAN
    },
    commentsBook: {
        allowNull: false,
        field: 'comments_book',
        type: DataTypes.STRING
    }
}

class Book extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOK_TABLE,
            modelName: 'Book',
            timestamps: false
        }
    }
}

module.exports = {
    BOOK_TABLE,
    BookSchema,
    Book
}