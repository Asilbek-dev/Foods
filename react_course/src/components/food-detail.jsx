import React, { Component } from 'react'

export default class FoodDetail extends Component {
    render() {
        const {foodId = 123} = this.props.match.params;
        return <h2>Food #id {foodId}</h2>;
    }
}
