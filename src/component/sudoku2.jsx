import React, { Component } from 'react'

class Sudoku2 extends Component {
    
    render() { 
        return ( 
            <>
                <div className="row">
                            <div className="col-md-12 header">
                                <button className = "btn btn-primary">New Games</button>
                            </div>
                            <div className="col-md-12">
                                <div className="row d-flex">
                                    <div className="col-md-4 border text-center"><p>1</p></div>
                                    <div className="col-md-4 border text-center"><p>2</p></div>
                                    <div className="col-md-4 border text-center"><p>3</p></div>
                                    <div className="col-md-4 border text-center"><p>4</p></div>
                                    <div className="col-md-4 border text-center"><p>5</p></div>
                                    <div className="col-md-4 border text-center"><p>6</p></div>
                                    <div className="col-md-4 border text-center"><p>7</p></div>
                                    <div className="col-md-4 border text-center"><p>8</p></div>
                                    <div className="col-md-4 border text-center"><p>9</p></div>
                                </div>
                            </div>
                            <div className="col-md-6 border text-dark"><i className="fa fa-pen-alt"></i><p>Notes</p></div>
                            <div className="col-md-6 border text-dark"><i className="fa fa-pen-alt"></i><p>Hint</p></div>
                            <div className="col-md-6 border text-dark"><i className="fa fa-undo"></i><p>Undo</p></div>
                            <div className="col-md-6 border text-dark"><i className="fa fa-eraser"></i><p>Erase</p></div>
                        </div>
            </>
         );
    }
}
 
export default Sudoku2;