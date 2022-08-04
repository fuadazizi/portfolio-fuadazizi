import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Frame from '../Components/Frame'

import './styles/works.scss'
import '../Components/styles/frame.scss'

function ArrowPageIcon() {
    return (
        <a href="https://www.rumah.houset.my.id" target="_blank">
            <svg width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <path d="M35.8301 35.9575L35.8301 38.6162L46.3612 38.6257L34.8873 50.0997L36.7729 51.9853L48.2469 40.5113L48.2563 51.0425L50.915 51.0425V35.9575H35.8301Z" fill="#3C3D3E" />
                    <rect x="1.24512" y="1.37256" width="84.2548" height="84.2548" rx="42.1274" stroke="#3C3D3E" />
                </g>
            </svg>
        </a>
    )
}

function PreviewWorks() {
    return (
        <div className="works-preview-container">

        </div>
    )
}

export default function Works() {
    const [showProject, setShowProject] = useState(false);

    const handleShow = () => {
        setShowProject(!showProject);
    }

    return (
        <Container className="parts-container">
            <Row xl={12} lg={10} md={10}>
                <Col className="parts-title" xl={3} lg={2} md={2}>
                    <p> Recent Works </p>
                </Col>
                <Col className="works-content" onClick={handleShow}>
                    <Row>
                        <Col xl={10} lg={10} md={9} sm={9} className="">
                            <p> rumah.houset.my.id </p>
                            <span> Frontend Developer - UX Reviewer </span>
                        </Col>
                        <Col>
                            <ArrowPageIcon />
                        </Col>
                    </Row>
                </Col>
            </Row>

            {
                showProject ?
                    <Row className="mt-4 mb-4">
                        <PreviewWorks />
                    </Row>
                    : <></>
            }
        </Container>
    )
}
