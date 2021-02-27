import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import './technologies.scss'
export default function ProjectsAndTools() {
    return (
        <Container className='container-fluid'>
            <Row>
                <Col lg={8}>
                    <h3>Technologies</h3>
                    <ul>
                        <li><b>Programming languages</b></li>
                        <p>Java ,JavaScript, TypeScript, Swift, Dart, Kotlin etc.</p>

                        <li><b>Frameworks & Libraries</b></li>
                        <p>Spring boot, JakartaEE, Reactjs , Angular, Vuejs, Flutter, React Native, Node.js, jQuery, Bootstrap etc. </p>

                        <li><b>Databases & DBMS</b></li>
                        <p>MySQL, PostgreSQL, Firebase, SQLite, MongoDb etc.</p>

                        <li><b>Tools</b></li>
                        <p>Git, GitHub, NPM, yarn, IntelliJ, Android studio, CMD, CI, Docker, NetBeans, VS code, Adobe XD etc. </p>
                    </ul>
                </Col>
                <Col lg={4}>
                    <Card className='card'>
                        <h4>Social media</h4>
                        <p><i className="fab fa-linkedin-in"></i><a target='blank' href='https://www.linkedin.com/in/elviskemevor/'>@elviskemevor</a> </p>
                        <p><i className="fab fa-github"></i><a target='blank' href='https://github.com/alwise'>@alwise</a> </p>
                        <p><i className="fab fa-facebook-f"></i> <a target='blank' href='https://www.facebook.com/kemevor.elvis'>@kemevor.elvis</a> </p>
                        <p><i className="fab fa-twitter"></i><a target='blank' href='https://twitter.com/Sena_Alwise'>@Sena_Alwise</a> </p>
                    </Card>
                </Col>  
            </Row>

        </Container>
    )
}
