import React,{Component,Fragment} from 'react'
import './style.css'
class TodoList extends Component{
    //constructor 在组件创建的第一个时刻自动被执行
    constructor(props){
        super(props)
        //在组件中创建两个数据,数据一定定义在state中
        this.state={
            inputValue:'',
            list:['learn React','learn Component']
        }
    }
    handleInputChange(e){
        console.log(this)
    this.setState({
        inputValue:e.target.value
    })
    }
    handleKeyUp(e){
        // console.log(e.keyCode)  
        if(e.keyCode===13&&e.target.value!==''){
            const list =[...this.state.list,this.state.inputValue]
            this.setState({
                list,
                inputValue:''
            })
        }
    }
    handleItemClick(index){
        const list =[...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
    render(){
        return (
            <Fragment>
             <input 
              className="input" 
             value={this.state.inputValue}
             onChange={this.handleInputChange.bind(this)}
             onKeyUp={this.handleKeyUp.bind(this)}
            //  bind=>this 此时这个this指向这个根组件然后就可以访问this.state
              />
             <ul>
                 {this.state.list.map((value,index)=>{
                 return (
                    <li
                    dangerouslySetInnerHTML={{__html:value}}
                    key={index}
                    onClick={this.handleItemClick.bind(this,index)}
                    >
                        {/* {value} */}
                        </li>
                 )
                 })
                 }
             </ul>
            </Fragment>
        )
    }
}
export default TodoList
