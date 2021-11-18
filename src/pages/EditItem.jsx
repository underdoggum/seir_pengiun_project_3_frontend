import { useState } from "react"
import { Link } from "react-router-dom"

const EditItem = (props) => {

    const [editForm, setEditForm] = useState({
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        img: ""
    })

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.editItem(editForm)
        setEditForm({
            name: "",
            price: 0,
            quantity: 0,
            description: "",
            img: ""
        })
    }

    // const form = (
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="Name">
    //             Name: 
    //             <input
    //                 type="text"
    //                 value={editForm.name}
    //                 name="name"
    //                 placeholder="Name of Item"
    //                 onChange={handleChange}
    //                 required
    //             />
    //         </label>

    return (
        <div className="EditItem">
            <Link to="/items">
                <button>Back to Your Items</button>
            </Link>
            {/* {form} */}
        </div>
    )
}

export default EditItem
