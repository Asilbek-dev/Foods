import categories from '../services/fakeCategories.js'

const Listgroup = ({items,onSelectItem,selectedItem,count}) =>{
    return <ul className = "list-group">
            <span className ="badge badge-info p-2 form-control mb-2">Categories</span>
            {items.map(item => <li key={item._id || item.name} className = {"list-group-item " + (selectedItem?._id === item._id &&" active")} onClick={() => onSelectItem(item)}>{item.name}
                <span className = "badge badge-warning float-right">{count}</span>
            </li>
            )}
        </ul>
    
}
export default Listgroup;