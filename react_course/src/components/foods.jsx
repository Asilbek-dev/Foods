import React, { Component } from 'react';
import {getFoods} from './services/fakeFoods';
import Like from './like.jsx';
import {paginate} from './utils/paginate';
import Pagination from './paginetion/pogination';
import Listgroup from './paginetion/list-group.jsx';
import { getCategories } from './services/fakeCategories';
import  {getCategoriesWithNumber}  from './utils/list';

class Foods extends Component {
    state = { 
        foods: getFoods(),
        categories: getCategories(),
        pageSize: 3,
        currentPage: 1,
        selectCategory: null,
    }

    
    handleDelete = (deleteFoodID) => {
    let {foods} = this.state;
    foods = foods.filter(({_id}) => _id !== deleteFoodID);
    this.setState({foods});
    }

    handleToggleLike = (toggleItemID) => {
    const {foods} = this.state;
    const food = foods.find((food) => food._id === toggleItemID);
    food.liked = food.liked ? false : true;
    this.setState({foods})
    }
    handlePageChange = (page) =>{
        this.setState({currentPage: page})
    }
    handleSelectCategory = (selectCategory) =>{
        this.setState({selectCategory: selectCategory, currentPage:1})
    }
    componentDidMount () {
        const categories = getCategories();
        this.setState({
            categories:[{name:"Barchasi",numbers: "10"}, ...categories]})
    }
    
    render() { 
        const {foods,currentPage,pageSize,categories,selectCategory} = this.state;
        let {length : count} = foods;  
        
        const filtered =selectCategory?._id ? foods.filter((food) => food.category._id === selectCategory._id) : foods;
        count = filtered.length;       

        // const categoriesWithNumber = [{name:"Barchasi",numbers: count},...getCategoriesWithNumber (foods, categories)];
        
        const paginatedItems = paginate(filtered,currentPage, pageSize);
        return count === 0 ? "Bizda mahsulot yo'q !!!" : (
            <main className="container">
            <div className="row">
            <div className="col-3 mt-4">
                <Listgroup items = {categories} onSelectItem = {this.handleSelectCategory} selectedItem = {selectCategory} count = {count}/>
            </div>
            <div className="col mt-4">
            <h5>Bizda {count} mahsulot bor!</h5>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr className="table-info">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedItems.map(({_id,title,category:{name}, price,amount,unit,liked}) => (
                    <tr key={_id}>
                        <td>{title}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                        <td>{unit}</td>
                        <td>
                            <Like liked = {liked} onToggleKike = {() => this.handleToggleLike(_id)}/>
                            <button className="btn-sm btn-danger" onClick={() => this.handleDelete(_id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Pagination countItems={count} currentPage={currentPage} pageSize = {pageSize} onPageChange = {this.handlePageChange}/>
                </div>
            </div>
        </main>
        );
    }
}

export default Foods;