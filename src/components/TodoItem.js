import React, {Component} from 'react'
import './TodoItem.css'
import classNames from 'classnames'
import checkImg from '../img/check.svg'
import checkCompleteImg from '../img/check-complete.svg'

class TodoItem extends Component {

    render() {
        const {item, onClick} = this.props
        
        let url = checkImg
        if(item.isComplete) {
            url = checkCompleteImg
        } 
        return (
            <div className={classNames('TodoItem',{
                'TodoItem-complete':item.isComplete
            })}>
                <img src={url} onClick={onClick}/>
                <p>{this.props.item.title}</p>
            </div>
        )
    }   
}
export default TodoItem;

// import './TodoItem.css'

// function TodoItem(props){
//     const {item} = props
//     let className='TodoItem'
//     if(item.isComplete) {
//         className+=' TodoItem-complete'
//     }
//     return (
//         <div className={className}>
//             <p>{props.item.title}</p>
//         </div>
//     )
// }
// export default TodoItem;