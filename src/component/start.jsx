import React, { Component } from 'react'


class Start extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: 'asilbek1',
            count: 5,
        }
    // console.log("constructor-app")
    }

    async componentDidMount(){  
        // console.log("componentDidMount-app")
        // try{
        await this.setState(({count}) => ({name: 'asilbek', count:count + 2}))
        console.log(this.state.name)
        await this.setState(({count}) => ({name: 'sherzod', count:count + 2}))
        console.log(this.state.name)
        // throw new Error("Catch testing")
        await this.setState(({count}) => ({name: 'shohrux', count:count + 2}))
        console.log(this.state.name)
        // }catch(ex){
        //     console.log(ex.massage)
        // }
        // console.log("no catch")
    }
    render() { 
        // console.log("render-app")
        const {name,count} = this.state;
        return ( 
            <>
                <h1>hello {name},count:{count}</h1>
            </>
         );
    }
}
 
export default Start;