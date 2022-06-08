const { Model, DataTypes, Sequelize } = require('sequelize')

const AUTHOR_TABLE = 'author'

const AuthorSchema = {
    idAuthor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_author',
        type: DataTypes.INTEGER
    },
    nameAuthor: {
        allowNull: false,
        field: 'name_author',
        type: DataTypes.STRING
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Author extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: AUTHOR_TABLE,
            modelName: 'Author',
            timestamps: false
        }
    }
}

module.exports = {
    AUTHOR_TABLE,
    AuthorSchema,
    Author
}