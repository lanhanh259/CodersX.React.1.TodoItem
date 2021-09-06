import React,{Component} from 'react'
import TodoItem from './TodoItem'
import addImg from '../img/add.svg'

class App extends Component {
    constructor() {
        super();
        this.state = {
            newItem:'',
            todoItems : [
                // {title:'Eat', isComplete:true},
                // {title:'Sleep'},
                // {title:'Play'}
            ]
        }
            
        this.onKeyUp = this.onKeyUp.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onItemClicked(item,index) {
        return (event) => {
            const {todoItems} = this.state
            const isComplete = item.isComplete

            this.setState ({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index+1)
                ]
            })
        }
    }
    
    onKeyUp(e) {
        if(e.keyCode === 13) { //enter key
            let text = e.target.value
            text = text.trim()
            if(!text) {
                return
            }
            
            this.setState((preState)=>(
                {
                    newItem :'',
                    todoItems: [
                    {title: text, isComplete: false}
                    ,...preState.todoItems
                ]
            }))

            
            console.log(this.state.newItem)
        }
    }

    onChange(e) {
        this.setState({
            newItem: e.target.value
        })
    }

    render () {
        const {newItem,todoItems} = this.state
        if(todoItems.length) {
            return (
                <div className="App">
                    <div className="header">
                        <img className="icon" src={addImg}></img>
                        <input 
                            type="text" 
                            placeholder="Add a new item" 
                            value={newItem}
                            onKeyUp={this.onKeyUp}
                            onChange={this.onChange}
                        />
                    </div>
                    {todoItems.length && todoItems.map((item,index)=> 
                        <TodoItem 
                            key={index} 
                            item={item} 
                            onClick={this.onItemClicked(item,index)}
                        />
                    )}                    
                </div>
            )
        }else {
            return (
            <div className="App">
                <div className="header">
                    <img className="icon" src={addImg}></img>
                    <input 
                        type="text" 
                        placeholder="Add a new item" 
                        value={newItem}
                        onKeyUp={this.onKeyUp}
                        onChange={this.onChange}
                    />
                </div>
                {todoItems.length===0 &&'nothing here'}
            </div>
            )
        }
    }
}


export default App;