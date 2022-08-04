import { Col } from 'react-bootstrap'

import Frame from '../Components/Frame'

import './styles/about.scss'

export default function About() {
    return (
        <Frame title="About">
            <Col className="about-content text-justify">
                <p>
                    Really liked design and digital things since high school, then started learning programming and frontend website developing from 2020 in college.
                </p> <br />
                <p>
                    Familiar with UI designing tools like Figma, MarvelApp, and Adobe XD.
                </p> <br />
                <p>
                    Experienced being UI developer trained in HTML5, CSS, JavaScript, and ReactJS. Take a part as frontend developer for 1 year at Houset.
                </p> <br />
            </Col>
        </Frame>
    )
}
