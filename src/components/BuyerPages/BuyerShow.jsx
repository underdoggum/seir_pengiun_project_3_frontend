import { useParams, useNavigate } from "react-router"
import { Container, Image } from "react-bootstrap"


const BuyerShow = (props) => {
    const params = useParams()
    const id = params.id

    const item = props.allItems.find(i => i._id === id)

    return (
        <div className="buyerShow">
            <Container className="mt-5 mb-5">
                <Image src={item.img} fluid /><br />
                Name: {item.name} <br />
                Price: {item.price} <br />
                Quantity: {item.quantity} <br />
                Description: {item.description} <br />
            </Container>
        </div>
    )
}

export default BuyerShow;
