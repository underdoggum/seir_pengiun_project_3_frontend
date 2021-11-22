import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap"

const NewItem = (props) => {

    const navigate = useNavigate();

    // state to hold form data, initialized with empty values
    const [newForm, setNewForm] = useState({
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        img: ""
    })

    // multiple handlechanges for each input
    const handleNameChange = (event) => {
        setNewForm({ ...newForm, name: event.target.value })
    }

    const handlePriceChange = (event) => {
        setNewForm({ ...newForm, price: event.target.value })
    }

    const handleQuantityChange = (event) => {
        setNewForm({ ...newForm, quantity: event.target.value })
    }

    const handleDescriptionChange = (event) => {
        setNewForm({ ...newForm, description: event.target.value })
    }

    const handleImgChange = (event) => {
        setNewForm({ ...newForm, img: event.target.value })
    }

    // handleSubmit function for the form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createItem(newForm)
        navigate("/items")
    }

    // const form = (
    //     <form onSubmit={handleSubmit} className="container">
    //         <label htmlFor="Name" className="col">
    //             Name: 
    //             <input
    //                 type="text"
    //                 value={newForm.name}
    //                 name="name"
    //                 placeholder="Name of Item"
    //                 onChange={handleNameChange}
    //                 required
    //                 autoFocus
    //             />
    //         </label>
    //         <label htmlFor="Price" className="col">
    //             Price (USD): 
    //             <input
    //                 type="text"
    //                 value={newForm.price}
    //                 name="price"
    //                 placeholder="Price"
    //                 onChange={handlePriceChange}
    //                 min={0}
    //                 required
    //             />
    //         </label>
    //         <label htmlFor="Quantity" className="col">
    //             Quantity: 
    //             <input
    //                 type="text"
    //                 value={newForm.quantity}
    //                 name="quantity"
    //                 placeholder="Quantity"
    //                 onChange={handleQuantityChange}
    //                 min={0}
    //             />
    //         </label>
    //         <label htmlFor="Image URL" className="col">
    //             Image URL: 
    //             <input
    //                 type="text"
    //                 value={newForm.img}
    //                 name="img"
    //                 placeholder="Image URL"
    //                 onChange={handleImgChange}
    //             />
    //         </label>
    //         <label htmlFor="Description" className="col">
    //             Description: 
    //             <textarea
    //                 style={{resize: "vertical"}}
    //                 cols={50}
    //                 rows={10}
    //                 value={newForm.description}
    //                 placeholder="Please enter a brief description of your item"
    //                 onChange={handleDescriptionChange}
    //             />
    //         </label>
    //         <input type="submit" value="Add Item to Store" className="submit-button"/>
    //     </form>
    // )

    return (
        <div className="NewItem">
            <Link to="/items">
                <button>Back to Your Items</button>
            </Link>
            <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item
            htmlFor="Name" className="col">
                Name: 
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name of Item"
                    onChange={handleNameChange}
                    required
                    autoFocus
                /></ListGroup.Item>
    <ListGroup.Item
            htmlFor="Price" className="col">
                Price (USD): 
                <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="Price"
                    onChange={handlePriceChange}
                    min={0}
                    required
                />
    </ListGroup.Item>
    <ListGroup.Item
        htmlFor="Quantity" className="col">
                Quantity: 
                <input
                    type="text"
                    value={newForm.quantity}
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleQuantityChange}
                    min={0}
                />
    </ListGroup.Item>
    <ListGroup.Item
    htmlFor="Image URL" className="col">
                Image URL: 
                <input
                    type="text"
                    value={newForm.img}
                    name="img"
                    placeholder="Image URL"
                    onChange={handleImgChange}
                />
    </ListGroup.Item>
    <ListGroup.Item
    htmlFor="Description" className="col">
    Description: 
    <textarea
        style={{resize: "vertical"}}
        cols={50}
        rows={10}
        value={newForm.description}
        placeholder="Please enter a brief description of your item"
        onChange={handleDescriptionChange}
    />
    </ListGroup.Item>
                </ListGroup>
</Card>
            {/* {form} */}
        </div>
    )
}

export default NewItem;
