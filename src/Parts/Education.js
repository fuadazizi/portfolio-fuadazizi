import { Col } from 'react-bootstrap'
import Frame from '../Components/Frame'

import './styles/education.scss'

export default function Education() {
    const eduArr = [
        {
            "name": "Telkom University (2018-2022)",
            "field": "Informatics Engineering"
        },
        {
            "name": "SMAN 1 Baleendah",
            "field": "Natural Science"
        },
        {
            "name": "SMPN 3 Baleendah",
            "field": " -"
        }
    ]
    const EducationSection = ({ eduArr }) => {
        return (
            <>
                {
                    eduArr.map((edu) =>
                        <div className="education-card-container">
                            <p className="education-card-name"> {edu.name} </p>
                            <p className="education-card-field"> {edu.field} </p>
                        </div>
                    )
                }
            </>
        )
    }

    return (
        <Frame title="Education">
            <Col>
                <EducationSection eduArr={eduArr} />
            </Col>
        </Frame>
    )
}
