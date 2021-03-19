import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import './experience.scss'
export default function Experience() {
    return (
        <Container className="container-fluid container justify-content-md-center">
            	
        <Row className='justify-content-md-center'>
            <Col lg={12}><h3>Experience</h3></Col>
            <Col className="col" sm={12} lg={8}>
                <ul>
                    <b>Alwise Studio Inc. (2017 - Current)</b>
                    <li>
                        <p>
                           Lead team to build enterprise based software from start to finish.
                        </p>
                    </li>
                    <li>
                        <p>
                           Attend administrative meetings for strategic decision making.
                        </p>
                    </li>
                    
                    <b>Ghana Statistical Service (2019 - 2020)</b>
                    <li>
                        <p>
                            Developed report tracking web base application.
                        </p>
                    </li>
                    <li>
                        <p>
                            Information Technology support.
                        </p>
                    </li>
                    <li>
                        <p>
                            Data collection and analysis 
                        </p>
                    </li>

                    <b>Livestock City, internship (2019 - 2020)</b>
                    <li>
                        <p>
                            Lead team to build android mobile app.
                        </p>
                    </li>
                    <li>
                        <p>
                             Attend meetings for strategic decision making.
                        </p>
                    </li>


                    <b>Amalitech Service Center (2021 - Present)</b>
                    <li>
                        <p>
                             Software developer
                        </p>
                    </li>
                   
                   
                </ul>
            </Col>
           
            <Col className="col" lg={4}>
                 <Card className="card experienceCard">

                 </Card>
                <Col lg={12}>
                    <b>Sample projects</b>
                    <ul>
                        <li>Payroll software(Reactjs, Spring boot, PostgreSQL and AWS)</li>
                        <li>School management (Desktop 2017)</li>
                        <li>Web based Stock management</li>
                        <li>Bulk SMS mobile app</li>
                        <li>Point of sale (Desktop)</li>
                        <li>Livestock commerce app (android)</li>
                        <li>REST API's</li>
                        <li>UI/UX</li>
                    </ul>
                </Col>
            </Col>
        </Row>
    </Container>
    )
}
