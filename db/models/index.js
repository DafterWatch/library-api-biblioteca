const { Student, StudentSchema } = require('./students.model')
const { Category, CategorySchema } = require('./categories.model')
const { Editorial, EditorialSchema } = require('./editorial.model')
const { Author, AuthorSchema } = require('./author.model')
const { Book, BookSchema } = require('./book.model')
const { Loan, LoanSchema } = require('./loan.model')
const { Reserve, ReserveSchema } = require('./reserve.model')

function setupModels(sequelize) {
    Student.init(StudentSchema, Student.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Editorial.init(EditorialSchema, Editorial.config(sequelize))
    Author.init(AuthorSchema, Author.config(sequelize))
    Book.init(BookSchema, Book.config(sequelize))
    Loan.init(LoanSchema, Loan.config(sequelize))
    Reserve.init(ReserveSchema, Reserve.config(sequelize))
}

module.exports = setupModels