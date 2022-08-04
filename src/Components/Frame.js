import { Container, Row, Col } from 'react-bootstrap'

import './styles/frame.scss'

export default function Frame({ children, title }) {
    return (
        <Container className="parts-container">
            {/* <Row xl={10} lg={10} md={10}> */}
            <Row>
                <Col className="parts-title" xl={3} lg={2} md={2}>
                    <p> {title} </p>
                </Col>
                {children}
            </Row>
        </Container>
    )
}
