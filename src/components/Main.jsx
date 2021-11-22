import {useContext, useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import EditItem from "../pages/EditItem"
import Index from "../pages/Index"
import NewItem from "../pages/NewItem"
import { Link } from "react-router-dom"
import { GlobalCtx } from "../App"
import BuyerIndex from "./BuyerPages/BuyerIndex"
import BuyerShow from "./BuyerPages/BuyerShow"

const Main = (props) => {

    const {gState, setGState} = useContext(GlobalCtx)
    const {url, token} = gState;
    const [items, setItems] = useState(null)

// dummy info, waiting until we can get user-specific items to replace this with all the items and store in a state, similar to the above maybe?
const allItems = [
    {
        _id: "1dummy",
        name: "item1",
        price: 1,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "2dummy",
        name: "item2",
        price: 2,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "3dummy",
        name: "item3",
        price: 3,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item4",
        price: 4,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item5",
        price: 5,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item6",
        price: 6,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item7",
        price: 7,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item8",
        price: 8,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "4dummy",
        name: "item9",
        price: 9,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    },
    {
        _id: "5dummy",
        name: "item10",
        price: 10,
        quantity: 2,
        description: "this is dummy",
        img: "https://www.keepingussafe.org/wp-content/uploads/2017/08/Crash-Dummy1.jpg"
    }]


    const getItems = async () => {
        const response = await fetch(url + "/items/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const data = await response.json()
        setItems(data)
    }

    const createItem = async (item) => {
        await fetch(url + "/items/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + token
            },
                body: JSON.stringify(item)
        })
        getItems()
    }

    // updateItems function (needs to be passed into EditItem.jsx)
    const updateItem = async (item, id) => {
        await fetch(url + "/items/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + token
            },
            body: JSON.stringify(item),
        })
        getItems();
    };


    // deleteItems function (needs to be passed into Index.jsx)
    const deleteItem = async id => {
        await fetch(url + "/items/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + token
            }  
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
