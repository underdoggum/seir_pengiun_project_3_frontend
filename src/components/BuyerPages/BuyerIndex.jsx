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
import { faCartPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// this component should receive ALL items from all seller users as props
const BuyerIndex = (props) => {

    // state for modal
    // reference: https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false)

    const handleModalClose = () => setShow(false)
    const handleModalShow = () => setShow(true)
    



  // if props.allItems data has been fetched, return allItems
    if (props.allItems) {
        return (
            <section className="buyerIndex">
                <Container>

                    {/* This is for the shopping cart */}
                    <Button variant="secondary" onClick={handleModalShow} className="float-end">
                        Your cart
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
                    </Button>

                    <Modal show={show} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleModalClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    {/* This is for the cards */}
                    <Row>
                        {props.allItems.map((item, index) => (
                            <Col md={4} className="mt-4">
                                <Card>
                                    <Card.Title className="text-center mt-2">Restaurant name</Card.Title>
                                    <Card.Text className="m-2 mb-3">
                                        <span>${item.price} (USD)</span>
                                        <button className="float-end text-center" style={{fontSize: "small", border: "none", backgroundColor: "#90ee90", padding: "5px"}}>
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

export default BuyerIndex
