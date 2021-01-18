import React, { Component } from 'react'
import Sudoku2 from "../component/sudoku2"

class Sudoku extends Component {
    
    render() { 
        return ( 
            <div className = "container">
                <div className="row">
                    <div className="col-md-7">
                        <table className = "table table-bordered">
                        <tbody>
                            <tr>
                                <td></td>
                                <td>6</td>
                                <td>9</td>
                                <td></td>
                                <td>1</td>
                                <td>5</td>
                                <td>7</td>
                                <td></td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td>7</td>
                                <td></td>
                                <td>3</td>
                                <td>2</td>
                                <td>4</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>7</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>9</td>
                                <td></td>
                                <td>1</td>
                                <td>5</td>
                                <td>7</td>
                                <td>3</td>
                                <td>8</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td></td>
                                <td>9</td>
                                <td>6</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>8</td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td>5</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>2</td>
                                <td>8</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>6</td>
                                <td></td>
                            </tr>
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