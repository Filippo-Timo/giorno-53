import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const FavoritesList = () => {

    const favorites = useSelector((currentState) => {
        return currentState.favorites.content
    })

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1 className="display-1">Remote Jobs Search</h1>
                    <Link to="/">Torna in home!</Link>
                </Col>
                <Col>
                    {favorites.map((companyName) => (
                        <Row key={companyName.company_name}>
                            <Col>
                                <a href="#">{companyName.company_name}</a>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default FavoritesList