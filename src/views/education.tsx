import React from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import educ from "../assets/education.jpg";
import './education.scss'
export default function Education() {
	return (
		<Container className="container-fluid container justify-content-md-center">
            	
			<Row className='justify-content-md-center'>
                <Col lg={12}><h3>Education & Certifications</h3></Col>
				<Col className="col" lg={8}>
					<ul>
						<li>
							<p>
								Bachelor of science in Information Technology 2015 - 2019,
								University of Education Winneba Kumasi Campus
							</p>
						</li>
						<li>
							<p>
                                Detect-ware Training (Certification) 2016, UEW_K
							</p>
						</li>
						<li>
							<p>
                                Amalitech Training Academy
							</p>
						</li>
					</ul>
				</Col>

				<Col className="col" lg={4}>
					<Card className="card educationCard"/>
				</Col>
			</Row>
		</Container>
	);
}
