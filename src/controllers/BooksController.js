const knex = require("../database/knex")

class BooksController{


    async createBook(req, res){
        const {user_id} = req.params
        const {author, title, description, numberOfPages} = req.body
        const book = {
            author,
            title,
            description,
            numberOfPages,
            isAvaible: false,
            user_id

        }       
       
        await knex("books").insert({title: book.title,
            description: book.description,
            numberOfPages: book.numberOfPages,isAvaible: book.isAvaible,
            user_id: book.user_id})

        return res.status(201).json("Livro criada com sucesso")
    }

    async listBook(req, res) {
        const books = await knex("books")
 
        return res.status(200).json(books)
    }

    async listBookById(req, res) {
        const {id} = req.params
        const book = await knex("books").where({id})
        return res.status(200).json(book)
    }

    async updateBook(req, res) {
        const {id} = req.params
        const {author, title, description, numberOfPages, isAvaible} = req.body

        await knex("books").where({id}).update({author,title,description,numberOfPages,isAvaible})
 
        return res.status(200).json("Livro atualizado com sucesso!")
    }

    async deleteBook(req,res){
        const {id} = req.params

        await knex("books").where({id}).delete()

        return res.status(200).json("Livro deletada com sucesso!")

    }

}

module.exports = BooksController