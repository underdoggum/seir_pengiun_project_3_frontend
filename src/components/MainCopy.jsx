import {useContext, useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import EditItem from "../pages/EditItem"
import Index from "../pages/Index"
import NewItem from "../pages/NewItem"
import { Link } from "react-router-dom"
import { GlobalCtx } from "../App"
import React from "react"


const MainCopy = (props) => {

    const {gState, setGState} = useContext(GlobalCtx)
    const {url, token} = gState;
    const [items, setItems] = useState(null)

    // const URL = "https://unwasted-backend.herokuapp.com/items/"

    const getItems = async () => {
        const response = await fetch(url + "/items/", {
            method: "get",
            headers:{
                Authorization: "bearer " + token
            }
        })
        const data = await response.json()
        setItems(data)
    }

    const createItem = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer" + token
            },
                body: JSON.stringify(item)
        })
        getItems()
    }

    // updateItems function (needs to be passed into EditItem.jsx)


    // deleteItems function (needs to be passed into Ind .jsx)


    
    useEffect(() => {
        getItems()
    }, [])

    return <main>
        {/* The below link just for our use, will need to refactor depending on how the landing page develops with user auth */}
        {/* <Link to="/items">
            <button>See all items</button>
        </Link> */}

        <h2>HEY</h2>

        
        <Routes>
            <Route path="/items" element={
                <Index
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
                    items={items}
                />}
            />
        </Routes>
    </main>
}

export default MainCopy
