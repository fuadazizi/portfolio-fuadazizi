import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

import About from '../Parts/About'
import Education from '../Parts/Education'
import Experience from '../Parts/Experience'
import LeftHero from '../Parts/LeftHero'
import Works from '../Parts/Works'

import "./assets/style/landing-page.scss"

export default function LandingPage() {
    return (
        <Container fluid>
            <Navbar />
            <Row>
                <Col>
                    <LeftHero />
                </Col>
                <Col>

                </Col>
            </Row>

            <About />
            <Works />
            <Education />
            <Experience />
            <Footer />
        </Container>
    )
}
