
import React,{ Component } from 'react';
import {generateRandomGrid,floodFillAt,COLORS} from './paint'
import './main.css';
export default class Main extends Component{
    constructor(props) {
        super(props);
       this.state= {
           grid:  generateRandomGrid(20,20),
           colors: COLORS,
           X :0,
           Y:0
       }
       
    }
    btnClick(e){
        e.preventDefault()
        let x = e.target[1].value
        let y = e.target[2].value
        let color = e.target[0].value
        let grid = this.state.grid
       this.setState({
           grid:floodFillAt(grid,x,y,color)
       }) 
    }
    pixelOnClick(e){
        let coor = e.target.id.split(',')
        this.setState({
            X:coor[1],
            Y: coor[0]
        })
    }
    inputChange(e){
        let value = e.target.value
        let id = e.target.id
        if(id =='X'){
            this.setState({
                X: value
            })
        } else {
            this.setState({
                Y: value
            })
        }
        console.log(value,e.target.id);
    }
    render(){
        let {grid,colors} = this.state
  return (
      <div className="main">
          <form  className="function-form" onSubmit={this.btnClick.bind(this)}>
  <label >Choose a Color:</label>
  <select name="Colors" id="Colors">
      {colors && colors.map((color,index) => (
    <option value={color} key={index} style={{ color:color}}>  {color}</option>
      ))}
   ]
  </select>
  <br/>
  <p>You can input the coordinate <br/>below or click on the paint board</p>
  X:<input id="X" onChange={this.inputChange.bind(this)} value={this.state.X}/> <br/>
 Y:<input id="Y" onChange={this.inputChange.bind(this)} value={this.state.Y}/> <br/>
    <input type="submit" value="Submit"/>
</form>
    <div className="grid">
     { grid && grid.map( (rows,rowsIndex) =>(
          <div key={rowsIndex} className="pixel-rows"> 
         { rows && rows.map((pixel,index) =>(
             <div className="pixel" onClick={this.pixelOnClick.bind(this)} key ={index} id={rowsIndex+','+index} style={{ background: pixel}}>
                </div>
         ))}
         </div>
   ))}
    </div>
    </div>
  );
}
}

