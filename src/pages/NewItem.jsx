import { useState } from "react"
import { Link } from "react-router-dom"

const NewItem = (props) => {

    // state to hold form data, initialized with empty values
    const [newForm, setNewForm] = useState({
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        img: ""
    })

    // handleChange function for when the user enters a keystroke
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    // handleSubmit function for the form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createItem(newForm)
        setNewForm({
            name: "",
            price: 0,
            quantity: 0,
            description: "",
            img: ""
        })
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">
                Name: 
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name of Item"
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="Price">
                Price (USD): 
                <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="Quantity">
                Quantity: 
                <input
                    type="text"
                    value={newForm.quantity}
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="Image URL">
                Image URL: 
                <input
                    type="text"
                    value={newForm.img}
                    name="img"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="Description">
                Description: 
                <textarea
                    cols={50}
                    rows={5}
                    value={newForm.description}
                    placeholder="Please enter a brief description of your item"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Add Item to Store" />
        </form>
    )


    return (
        <div className="NewItem">
            <Link to="/items">
                <button>Back to Your Items</button>
            </Link>
            {form}
        </div>
    )
}

export default NewItem;
