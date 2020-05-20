import * as React from "react"

interface Props{
  handleSubmit:(value:string)=>void
}
interface State{
  itemText:string
}

export class TodoItem extends React.Component<Props,State>{
  constructor(props:Props){
    super(props)
    this.state={
      itemText:""
    }
  }
  private updateValue(e:React.ChangeEvent<HTMLInputElement>){
    this.setState({itemText:e.target.value})
  }

  private inputRef=React.createRef<HTMLInputElement>()

  private handleSubmit(e:React.FormEvent<HTMLFontElement>){
    e.preventDefault()
    if(!this.state.itemText.trim()){
      return
    }
    this.props.handleSubmit(this.state.itemText)
    this.setState({itemText:""})
  }
  
  render(){ return(<input ref={this.inputRef} className="edit" value={this.state.itemText}/>)}
}