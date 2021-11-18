import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

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
        <Routes>
            <Route path="/" element={<index/>}/>
            <Route path="/items/:id" element={<Show/>}/>
        </Routes>
    </main>
}

export default Main;