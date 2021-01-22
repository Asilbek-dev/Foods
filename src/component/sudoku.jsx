import React, { Component } from 'react'
import Sudoku2 from "../component/sudoku2"

class Sudoku extends Component {
    state = {
    numbers: [
        [1,2,3,1,2,3,1,2,3],
        [4,5,6,4,5,6,4,5,6],
        [7,8,9,7,8,9,7,8,9],
        [1,2,3,1,2,3,1,2,3],
        [4,5,6,4,5,6,4,5,6],
        [7,8,9,7,8,9,7,8,9],
        [1,2,3,1,2,3,1,2,3],
        [4,5,6,4,5,6,4,5,6],
        [7,8,9,7,8,9,7,8,9],
    ],
    }
    
    render() { 
        return ( 
            <div className = "container">
                <div className="row">
                    <div className="col-md-7">
                        <table className = "table table-bordered">
                        <tbody>
                        {this.state.numbers.map(list => <tr key={Math.random()}>
                            {list.map(number => <td key={Math.random()}>
                                {number}
                            </td>)}
                        </tr>)}
                        </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <Sudoku2/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <table className = "table table-bordered lines">
                                    <tbody>
                                        <tr>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                        </tr>
                                        <tr>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                        </tr>
                                        <tr>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                            <td className = "line"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sudoku;