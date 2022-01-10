
import React, { Component } from 'react';
import { generateRandomGrid, floodFillAt, COLORS } from './paint'
import './main.css';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: generateRandomGrid(20, 20),
            colors: COLORS,
            X: 0,
            Y: 0,
            inputFormatUsable: true,
        }

    }
    btnClick(e) {
        e.preventDefault()
        let x = e.target[1].value
        let y = e.target[2].value
        let color = e.target[0].value
        let grid = this.state.grid
        if (y >= 0 && y <= 19 && x >= 0 && x <= 19) {
            this.setState({
                inputFormatUsable: true,
                grid: floodFillAt(grid, x, y, color)
            })
        } else {
            this.setState({
                inputFormatUsable: false
            })
        }

    }
    pixelOnClick(e) {
        let coor = e.target.id.split(',')
        this.setState({
            X: coor[1],
            Y: coor[0]
        })
    }
    inputChange(e) {
        let value = e.target.value
        let id = e.target.id
        if (id === 'X') {
            this.setState({
                X: value
            })
        } else {
            this.setState({
                Y: value
            })
        }
        console.log(value, e.target.id);
    }
    render() {
        let { grid, colors, inputFormatUsable } = this.state
        return (
            <div className='title'>
                <h1>This is a paint board</h1>
                <p>Simply select the pixel on the board or enter the coordinate and paint!</p>

                <div className="main">

                    <form className="function-form" onSubmit={this.btnClick.bind(this)}>


                        <Form.Select onChange={(e) => {
                            // console.log(e, e.innerText)
                        }}>
                            <option>Select Color</option>

                            {colors && colors.map((color, index) => (
                                // <Dropdown.Item value={color} key={index} style={{ background: color, color: 'white' }}>Something else</Dropdown.Item>
                                <option value={color} key={index} style={{ color: color }}>  {color}</option>
                            ))}


                        </Form.Select>
                        <br />
                        {inputFormatUsable ? '' : <p style={{ color: 'red' }}> ERROR! The inputs should be numbers<br /> between and including 0 and 19 </p>}
                        <div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">X</span>
                                </div>
                                <input id="X" className='coor' onChange={this.inputChange.bind(this)} value={this.state.X} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Y</span>
                                </div>
                                <input id="Y" className='coor' onChange={this.inputChange.bind(this)} value={this.state.Y} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            {/* X <input id="X" className='coor' onChange={this.inputChange.bind(this)} value={this.state.X} /> <br />
                            Y <input id="Y" className='coor' onChange={this.inputChange.bind(this)} value={this.state.Y} /> <br /> */}
                        </div>
                        <Button type="submit" variant="outline-dark">Paint!</Button>

                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                    <div className="grid">
                        <div className="x-coor">        <strong> X </strong>  →
                        </div>
                        <div className="y-coor">

                            <strong>Y</strong>  <br />
                            ↓<br></br>

                        </div>
                        <div className='board'>
                            {grid && grid.map((rows, rowsIndex) => (

                                <div key={rowsIndex} className="pixel-rows">

                                    {rows && rows.map((pixel, index) => (
                                        <div className="pixel" onClick={this.pixelOnClick.bind(this)} key={index} id={rowsIndex + ',' + index} style={{ background: pixel }}>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

