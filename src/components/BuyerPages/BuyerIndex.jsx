
/* To-do in Main.jsx:
 - make a conditional rendering for Index if the user is a seller
 - make a conditional rendering for BuyerIndex if the user is a buyer
 - pass down allItems as a prop to BuyerIndex
 - (if time permits) pass down seller user info as a prop to BuyerIndex

   To-do (misc)
 - test show route link
*/

import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faShoppingCart, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

// this component should receive ALL items from all seller users as props
const BuyerIndex = (props) => {

    // state for modal
    // reference: https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false)

    const handleModalClose = () => setShow(false)
    const handleModalShow = () => setShow(true)
    
    // some of the cart logic courtesy of "Web Dev Junkie"
    // reference: https://www.youtube.com/watch?v=02ieJ1YXZM4
    // state for cart
    const [cart, setCart] = useState([])

    // add an item to the buyer's cart
    const addToCart = (cartItem) => {
        setCart([...cart, cartItem])
    }

    // remove an item from the buyer's cart
    const removeFromCart = (cartItem) => {
        // remove the item in cart where the index matches the cartItem id
        const index = cart.findIndex(c => c._id === cartItem._id)
        cart.splice(index, 1)
    }

    // used in shopping cart modal to calculate current running subtotal
    const calcCurrentSubtotal = () => {
        let sum = 0
        cart.forEach(item => {
            sum += item.price
        })
        return sum
    }


  // if props.allItems data has been fetched, return allItems
    if (props.allItems) {
        return (
            <section className="buyerIndex">
                <Container>
                    {/* This is for the shopping cart */}
                    <Button variant="secondary" onClick={handleModalShow} className="float-end" style={{position: "sticky", right: "0", top: "20px", zIndex: "1"}}>
                        Your cart ({cart.length})
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
                    </Button><br /><br /><br />

                    <Modal show={show} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Your cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="m-3">
                            <ul>
                                {cart.map((cartItem, index) => (
                                    <li key={index} className="mt-3" style={{listStyleType: "none"}}>
                                        <button
                                            style={{fontSize: "small", border: "none", backgroundColor: "inherit", padding: "5px", borderRadius: "10px"}}
                                            onClick={() => removeFromCart(cartItem)}
                                        >
                                            <FontAwesomeIcon style={{margin: "0 10px", color: "red"}} icon={faTimesCircle} />
                                        </button>
                                        {cartItem.name}
                                        <span className="float-end">${cartItem.price}</span>
                                    </li>
                                ))}
                                <hr />
                                Subtotal:<span className="float-end">${calcCurrentSubtotal()}</span>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => {setCart([])}}>
                                Clear cart
                            </Button>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    {/* This is for the cards */}
                    <Row>
                        {props.allItems.map((item, index) => (
                            <Col key={index} md={4} className="mt-4">
                                <Card>
                                    <Card.Title className="text-center mt-2">{item.name}</Card.Title>
                                    <Card.Text className="m-2 mb-3">
                                        <span>${item.price} (USD)</span>
                                        <button
                                            className="float-end text-center"
                                            style={{fontSize: "small", border: "none", backgroundColor: "#90ee90", padding: "5px", borderRadius: "10px"}}
                                            onClick={() => addToCart(item)}>
                                            <FontAwesomeIcon icon={faCartPlus} size="2x" />
                                        </button>
                                    </Card.Text>
                                    <Link to={`/showItem/${item._id}`}>
                                        <img src={item.img} alt={item.name} className="card-img-bottom" />
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

// }

export default BuyerIndex