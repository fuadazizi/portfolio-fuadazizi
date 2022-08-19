import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

import About from '../Parts/About'
import Education from '../Parts/Education'
import Experience from '../Parts/Experience'
import LeftHero from '../Parts/LeftHero'
import Works from '../Parts/Works'

import "./assets/style/landing-page.scss"

import Foto from "./assets/images/Foto.png";

export default function LandingPage() {
    return (
        <Container fluid>
            <Navbar />
            <Row>
                <Col>
                    <LeftHero />
                </Col>
                <Col>
                    <section className="landing-photo">
                        <img src={Foto} alt="no-photo-found"/>
                    </section>
                </Col>
            </Row>

            <section id="about"> <About /> </section>
            <section id="works"> <Works /> </section>
            <section id="educations"> <Education /> </section>
            <section id="experiences"> <Experience id="experiences"/> </section>
            <Footer />
        </Container>
    )
}
