const knex = require("../database/knex")

class BooksController{


    async createBook(req, res){
        const {author, title, description, numberOfPages, isAvaible} = req.body
        const book = await knex("books").insert({author,title,description,numberOfPages,isAvaible:true})

        return res.status(201).json("Livro criado com sucesso")
    }

    async listBook(req, res) {
        const books = await knex("books")
 
        return res.status(200).json(books)
    }

    async listBookById(req, res) {
        const {idBook} = req.params
        const book = await knex("books").where({idBook})
        return res.status(200).json(book)
    }


    async deleteBook(req,res){
        const {idBook} = req.params

        await knex("books").where({idBook}).delete()

        return res.status(200).json("Livro deletado com sucesso!")

    }

}

module.exports = BooksController