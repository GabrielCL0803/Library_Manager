const knex = require("../database/knex")

class LoansController{


    async borrowBooks(req, res){
        const book = await knex("books").where({idBook: book_id}).first()
        const user = await knex("users").where({idUser: user_id}).first()

        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user){
            return res.status(400).json("Usuário não encontrado!")
        }

        await knex("loans").insert({user_id, book_id})
        await knex("books").where({idBook: book_id}).update({isAvailable: false})

        return res.status(200).json("Empréstimo realizado com sucesso!")
    }

    async listBorrowedBook(req, res) {
        
    }

    async totalBorrowedBooks(req, res) {
       
    }


    async returnBorrowedBooks(req,res){
       
    }

}

module.exports = LoansController