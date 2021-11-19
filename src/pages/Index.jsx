import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Index = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    // state to hold which item will be displayed on the list, default/initial state on page load is the first item
    const [displayedItem, setDisplayedItem] = useState({})

    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        if (props.items) {
            const item = props.items.find(b => b._id === id)
            setEditForm(item)
            setDisplayedItem(props.items[0])
        }
    }, [props.items])
    
    // handleSubmit for form
    const handleSubmit = (event) => {
        const item = props.items.find(b => b._id === id);
        event.preventDefault()
        props.updateItem(editForm, item._id)
        navigate("/")
    }

    // handleSelection function to deal with user selecting an item
    const handleSelection = (event) => {
        setDisplayedItem({
            ...displayedItem,
            name: event.target.value,
            img: props.items.find(item => item.name === event.target.value).img,
            quantity: props.items.find(item => item.name === event.target.value).quantity,
            price: props.items.find(item => item.name === event.target.value).price,
            description: props.items.find(item => item.name === event.target.value).description,
            _id: props.items.find(item => item.name === event.target.value)._id
        })
    }

    const removeItem = () => {
        props.deleteItem(displayedItem._id)
        navigate("/items")
    }

    // conditional statement for rendering if the items list has been fetched
    if (props.items) {
        return (
            <section className="index">
                <Link to={"/newItem"}>
                    <button>Add Item</button>
                </Link>
                <button className="delete-button" onClick={removeItem}>Delete Item</button>
                <Link to={`/editItem/${displayedItem._id}`}>
                <button className="edit-button">Edit Item</button>
                </Link>
                <div className="list-items">
                    {/* reference for using select/option in React: https://reactjs.org/docs/forms.html#the-select-tag */}
                    <label htmlFor="Select an item">
                        <select style={{overflowY: "auto"}} value={displayedItem.name} onChange={handleSelection} size={props.items.length}>
                            {props.items.map(item => {
                                return <option value={item.name}>{item.name}</option>
                            })}
                            
                        </select>
                    </label>
                    
                </div>
                <div className="show-items">
                    <h1>Name: {displayedItem.name}</h1>
                    <img src={displayedItem.img} alt={displayedItem.name} width={400} />
                    <h4>Price: {displayedItem.price}</h4>
                    <h4>Quantity: {displayedItem.quantity}</h4>
                    <p>Description: {displayedItem.description}</p>
                </div>
            </section>
        )
    } else {
        return <h1>Loading...</h1>
    }
}


export default Index;
