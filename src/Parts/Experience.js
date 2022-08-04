import { Row, Col } from 'react-bootstrap'
import Frame from '../Components/Frame'

import Houset from './images/icon-houset.png'
import Iflab from './images/icon-iflab.png'
import Leholeh from './images/icon-leholeh.png'

import './styles/experience.scss'

export default function Experience() {
    const baseURL = "localhost:3000"
    const expArr = [
        {
            position: "Front-end Developer",
            place: "Houset",
            period: "July 2021 - June 2022",
            desc: " HTML | CSS | REACTJS",
            icon: Houset
        },
        {
            position: "Practicum Assistant",
            place: "Informatics Lab Telkom University",
            period: "Sep 2021 - June 2022",
            desc: " C++ | JAVA",
            icon: Iflab
        },
        {
            position: "UI Designer",
            place: "Leholeh Indonesia",
            period: "June 2021 - Aug 2021",
            desc: " HTML | CSS | REACTJS",
            icon: Leholeh
        },
        {
            position: "Practicum Assistant",
            place: "Informatics Lab Telkom University",
            period: "Jan 2020 - Dec 2020",
            desc: " C++ ",
            icon: Iflab
        }
    ]

    function ExperienceCard({ expArr }) {
        return (
            <Row>
                {
                    expArr.map((exp) =>
                        <Col>
                            <div className="experience-card-container">
                                <img src={exp.icon} className="experience-card-icon" />
                                <p className="experience-card-position"> {exp.position} </p>
                                <p className="experience-card-place"> {exp.place} </p>
                                <p className="experience-card-period"> {exp.period} </p>
                                <p className="experience-card-desc"> {exp.desc} </p>
                            </div>
                        </Col>
                    )
                }
            </Row>
        )
    }

    return (
        <Frame title="Experience">
            <Col>
                <ExperienceCard expArr={expArr} />
            </Col>
        </Frame>
    )
}
