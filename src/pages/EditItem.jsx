import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

// should receive props.items and props.updateItem function (needs to send two arguments, see Bookmark'd Index.jsx) from Main.jsx
const EditItem = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    const [editForm, setEditForm] = useState({
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        img: ""
    })

    // useEffect for rendering the item that matches the url's params "/item/8934fj4..."
    useEffect(() => {
        // if items data is fetched i.e. items is not null
        if (props.items) {
            const item = props.items.find(i => i._id === id)
            setEditForm(item)
        }
    }, [props.items])
    
 
    // handleChange for all inputs except for textarea
    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handleTextareaChange for just textarea input
    const handleDescriptionChange = (event) => {
        setEditForm({ ...editForm, description: event.target.value })
    }
    

    // handleSubmit for form
    const handleSubmit = (event) => {
        const item = props.items.find(i => i._id === id)
        event.preventDefault()
        props.updateItem(editForm, item._id)
        navigate("/items")
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">
                Name: 
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name of Item"
                    onChange={handleChange}
                    required
                    autoFocus
                />
            </label>
            <label htmlFor="Price">
                Price (USD): 
                <input
                    type="text"
                    value={editForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    min={0}
                    required
                />
            </label>
            <label htmlFor="Quantity">
                Quantity: 
                <input
                    type="text"
                    value={editForm.quantity}
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <label htmlFor="Image URL">
                Image URL: 
                <input
                    type="text"
                    value={editForm.img}
                    name="img"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="Description">
                Description: 
                <textarea
                    style={{resize: "vertical"}}
                    cols={50}
                    rows={10}
                    value={editForm.description}
                    placeholder="Please enter a brief description of your item"
                    onChange={handleDescriptionChange}
                />
            </label>
            <input type="submit" value="Submit changes" />
        </form>
    )

    return (
        <div className="EditItem">
            <Link to="/items">
                <button>Back to Your Items</button>
            </Link>
            {form}
        </div>
    )
}

export default EditItem
