import React,{Component} from 'react'
import ChapterStore from './ChapterStore'
import Chapter from './Chapter'
import ChapterForm from './ChapterForm'

class ChapterList extends Component{
    constructor(props){
        super(props)

        this.state= {
            chapters : []
        }
        this.store = new ChapterStore()

        this.add = (chapter) => {
            this.store.addOne(this.props.item.id, chapter)
        }

        this.delete = (chapterId) => {
            this.store.deleteOne(this.props.item.id, chapterId)
        }

        this.save = (chapterId, chapter) => {
            this.store.saveOne(this.props.item.id, chapterId, chapter)
        }

    }
    componentDidMount(){
        this.store.getAll(this.props.item.id)
        this.store.emitter.addListener('GET_CHAPTERS_SUCCESS', () => {
            this.setState({
                chapters : this.store.chapters
            })
        })
    }
    render(){
        return <div>
            <h3>
                i am the chapter list for {this.props.item.title} 
            </h3>
            <div>
                {
                    this.state.chapters.map((e, i) => <Chapter key={i} item={e} onDelete={this.delete} onSave={this.save} />)
                }
            </div>
            <div>
                <ChapterForm onAdd={this.add} />
            </div>
            <input type="button" value="back" onClick={() => this.props.onCancel()} />
        </div>
    }
}

export default ChapterList