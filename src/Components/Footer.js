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
                <Col xxl={8} xl={6} lg={6} md={5} className="footer-info">
                    <p className="footer-subtitle-top">
                        Have something in mind?
                    </p>
                    <p className="footer-subtitle-btm">
                        Let's build together.
                    </p>
                </Col>
                <Col className="footer-contact">
                    <Row>
                        <GetInTouchButton />
                    </Row>
                    <Row className="footer-contact-list">
                        <ul>
                            <li> <a href="https://www.linkedin.com/in/fuad-azizi/" target="blank" rel="noreferrer"> LinkedIn </a> </li>
                            <li> <a href="https://twitter.com/fuadazizi_" target="blank" rel="noreferrer"> Twitter </a> </li>
                            <li> <a href="https://www.instagram.com/fuadazizi_/" target="blank" rel="noreferrer"> Instagram </a> </li>
                            <li> <a href="https://www.facebook.com/fuadazizii/" target="blank" rel="noreferrer"> Facebook </a> </li>
                            <li> <a href="https://github.com/fuadazizi" target="blank" rel="noreferrer"> Github </a> </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
