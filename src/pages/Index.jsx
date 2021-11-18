import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {

    // state to hold which item will be displayed on the list, default/initial state on page load is the first item
    const [displayedItem, setDisplayedItem] = useState({
        name: "",
        img: "",
        quantity: "",
        price: "",
        description: ""
    })

    // handleSelection function to deal with user selecting an item
    const handleSelection = (event) => {
        setDisplayedItem({
            ...displayedItem,
            name: event.target.value,
            img: props.items.find(item => item.name === event.target.value).img,
            quantity: props.items.find(item => item.name === event.target.value).quantity,
            price: props.items.find(item => item.name === event.target.value).price,
            description: props.items.find(item => item.name === event.target.value).description
        })
    }

    // conditional statement for rendering if the items list has been fetched
    if (props.items) {
        return (
            <section className="index">
                <Link to={"/newItem"}>
                    <button>Add Item</button>
                </Link>
                <div className="list-items">
                    {/* reference for using select/option in React: https://reactjs.org/docs/forms.html#the-select-tag */}
                    <label htmlFor="Select an item">
                        <select style={{overflowY: "auto"}} value={displayedItem} onChange={handleSelection} size={props.items.length}>
                            {props.items.map(item => {

                                {/* BUG */}
                                {/* Bug 1: figure out how to keep the user-selected item selected in the dropdown ("selected" property in option JSX below doesn't keep when re-rendering) */}
                                {/* Bug 2: also, first item in props.items can't be shown */}
                                return <option selected={item.name === displayedItem.name} value={item.name}>{item.name}</option>
                                {/* ENDBUG lol */}

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
