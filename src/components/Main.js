import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import EditItem from "../pages/EditItem"
import Index from "../pages/Index"
import NewItem from "../pages/NewItem"
import { Link } from "react-router-dom"

const Main = (props) => {
    const [items, setItems] = useState(null)

    const URL = "https://unwasted-backend.herokuapp.com/items/"

    const getItems = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setItems(data)
    }

    const createItems = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(item)
        })
        getItems()
    }

    useEffect(() => {
        getItems()
    }, [])

    return <main>
        {/* The below link is in development, may need to refactor depending on how the landing page develops */}
        <Link to="/items">
            <button>See all items</button>
        </Link>

        <Routes>
            <Route path="/items" element={
                <Index
                    items={items}
                />}
            />
            <Route path="/newItem" element={
                <NewItem
                    createItems={createItems}
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

export default Main
