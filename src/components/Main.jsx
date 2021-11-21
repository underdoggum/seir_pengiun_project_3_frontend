import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import EditItem from "../pages/EditItem"
import Index from "../pages/Index"
import NewItem from "../pages/NewItem"
import { Link } from "react-router-dom"
import BuyerIndex from "./BuyerPages/BuyerIndex"
import BuyerShow from "./BuyerPages/BuyerShow"

const Main = (props) => {
    const [items, setItems] = useState(null)
    
    // dummy info, waiting until we can get user-specific items to replace this with all the items and store in a state, similar to the above maybe?
    const allItems = [
    {
        _id: "1dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "2dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "3dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "5dummy",
        name: "item1",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    }]

    const URL = "https://unwasted-backend.herokuapp.com/items/"

    const getItems = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setItems(data)
    }

    const createItem = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(item)
        })
        getItems()
    }

    // updateItems function (needs to be passed into EditItem.jsx)
    const updateItem = async (item, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        getItems();
    };


    // deleteItems function (needs to be passed into Index.jsx)
    const deleteItem = async id => {
        await fetch(URL + id, {
            method: "delete",
        });
        getItems();
    }
    
    useEffect(() => {
        getItems()
    }, [])

    return <main>
        {/* The below link just for our use, will need to refactor depending on how the landing page develops with user auth */}
        <Link to="/items">
            <button>See all items</button>
        </Link>

        {/* buyerIndex testing (delete or there will be a merge conflict!!!) */}
        <Link to="/allItems">
            <button>You're a buyer, and would get redirected here</button>
        </Link>
        

        <Routes>
            <Route path="/items" element={
                <Index
                    deleteItem={deleteItem}
                    items={items}
                />}
            />
            <Route path="/newItem" element={
                <NewItem
                    createItem={createItem}
                />}
            />
            <Route path="/editItem/:id" element={
                <EditItem
                    updateItem={updateItem}
                    items={items}
                />}
            />
            {/* buyerIndex testing (delete or there will be a merge conflict!!!) */}
            {/* flatMap functions are just to create more dummy items */}
            <Route path="/allItems" element={
                <BuyerIndex
                    allItems={allItems}
                />}
            />
            <Route path="/showItem/:id" element={
                <BuyerShow
                    allItems={allItems}
                />}
            />
        </Routes>
    </main>
}

export default Main
