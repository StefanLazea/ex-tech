import React from 'react';
import {Component} from 'react';
import BookStore from './BookStore'
import BookAddForm from './BookAddForm';
import Book from './Book'
import ChapterList from './ChapterList'

class BookList extends Component {
    constructor(){
        super()
        this.state = {
            books : [],
            showChaptersFor : -1,
            selectedBook : null
        }

        this.store = new BookStore()

        this.add = (book) => {
            this.store.addOne(book)
        }

        this.delete = (id) => {
            this.store.deleteOne(id)
        }

        this.save = (id, book) => {
            this.store.saveOne(id, book)
        }

        this.select = (id) => {
            let selected = this.state.books.find((e) => e.id === id)
            this.setState({
                showChaptersFor : id,
                selectedBook : selected
            })
        }
        this.cancel = (id) => {
            this.setState({
                showChaptersFor : -1,
            })
        }

    }

    componentDidMount(){
        this.store.getAll()
        this.store.emitter.addListener('GET_BOOKS_SUCCESS', () => {
            this.setState({
                books : this.store.books
            })
        })
    }

    render(){
        if (this.state.showChaptersFor === -1){
            return <div>
                {
                    this.state.books.map((e, i) => <Book key={i} item={e} onDelete={this.delete} onSave={this.save} onSelect={this.select} />)
                }
                <BookAddForm onAdd={this.add} />
            </div>
        }
        else{
            return <ChapterList item={this.state.selectedBook} onCancel={this.cancel} />
        }
    }
}

export default BookList
