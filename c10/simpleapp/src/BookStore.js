import {EventEmitter} from 'fbemitter'
const SERVER = 'http://localhost:8080'

class BookStore{
    constructor(){
        this.books = []
        this.emitter = new EventEmitter()
    }

    async getAll(){
        try{
            let response = await fetch(`${SERVER}/books`)
            let data = await response.json()
            this.books = data
            this.emitter.emit('GET_BOOKS_SUCCESS')
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('GET_BOOKS_ERROR')
        }
    }

    async addOne(book){
        try{
            await fetch(`${SERVER}/books`, {
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(book)           
            })
            this.getAll() 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('ADD_BOOK_ERROR')
        }
    } 
    async deleteOne(id){
        try{
            await fetch(`${SERVER}/books/${id}`, {
                method : 'delete',
            })
            this.getAll() 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('DELETE_BOOK_ERROR')
        }
    }
    async saveOne(id, book){
        try{
            await fetch(`${SERVER}/books/${id}`, {
                method : 'put',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(book)           
            })
            this.getAll() 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('SAVE_BOOK_ERROR')
        }
    }
}

export default BookStore