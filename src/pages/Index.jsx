import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {

    // state to hold which item will be displayed on the list, default/initial state on page load is the first item
    const [displayedItem, setDisplayedItem] = useState(props.items[0])



    // conditional statement for rendering if the items list has been fetched
    if (props.items) {
        return (
            <section className="index">
                <Link to={"/newItem"}>
                    <button>New item for sale</button>
                </Link>
                <div className="list-items">
                    <ul>
                    {props.items.map(item => {
                        return (
                            <div key={item.id}>
                                <li>
                                    {item.name}
                                    <Link to={`/editItem/${item._id}`}>
                                        <button>Edit Item</button>
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                    </ul>
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
