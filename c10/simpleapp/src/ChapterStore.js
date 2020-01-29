import {EventEmitter} from 'fbemitter'
const SERVER = 'http://localhost:8080'

class ChapterStore{
    constructor(){
        this.chapters = []
        this.emitter = new EventEmitter()
    }

    async getAll(bookId){
        try{
            let response = await fetch(`${SERVER}/books/${bookId}/chapters`)
            let data = await response.json()
            this.chapters = data
            this.emitter.emit('GET_CHAPTERS_SUCCESS')
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('GET_CHAPTERS_ERROR')
        }
    }

    async addOne(bookId, chapter){
        try{
            await fetch(`${SERVER}/books/${bookId}/chapters`, {
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(chapter)           
            })
            this.getAll(bookId) 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('ADD_CHAPTER_ERROR')
        }
    } 
    async deleteOne(bookId, chapterId){
        try{
            await fetch(`${SERVER}/books/${bookId}/chapters/${chapterId}`, {
                method : 'delete',
            })
            this.getAll() 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('DELETE_CHAPTER_ERROR')
        }
    }
    async saveOne(bookId, chapterId, chapter){
        try{
            await fetch(`${SERVER}/books/${bookId}/chapters/${chapterId}`, {
                method : 'put',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(chapter)           
            })
            this.getAll() 
        }
        catch(err){
            console.warn(err)
            this.emitter.emit('SAVE_CHAPTER_ERROR')
        }
    }
}

export default ChapterStore