import { Container, Row, Col } from 'react-bootstrap'
import "./styles/footer.scss"

function GetInTouchButton() {
    return (
        <button className="footer-get-touch"> Get in Touch </button>
    )
}

export default function Footer() {
    return (
        <Container fluid className="footer-container">
            <Row>
                <Col xl={8} className="footer-info">
                    <p className="footer-subtitle-top">
                        Have something in mind?
                    </p>
                    <p className="footer-subtitle-btm">
                        Let's build together.
                    </p>
                </Col>
                <Col>
                    <GetInTouchButton />
                </Col>
            </Row>
        </Container>
    )
}
