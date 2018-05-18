import React,{Component} from 'react'
import './title.css'
class Title extends Component{

    constructor(props)
    {
        super(props)
        this.state={
        
        title:'this is a dummy title',
        isInput:false
        }
    }
   
    editHandler(){
        this.setState({
         ...this.state,
         isInput: true
        })
    }
  
    render(){

  let output =null

  if (this.state.isInput){
      output=(
          <div className="Title">
          <input className ="form-control" type ="text" value={
             this.state.title
          }/>
          </div>
      )

  }
  else {
      output=(
          <div className="d-flex Title">
          <h1 className="display-4">{this.state.title}</h1>
          <span onClick={()=> this.editHandler()} className="ml-auto edit-icon">
          <i className="fas fa-pencil-alt"></i>
          </span>
          </div>
      )
  }

        return (
            <div>
                {output}
                </div>

          )

    }
}

export default Title