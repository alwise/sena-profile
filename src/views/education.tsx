import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import './education.scss'
export default function Education() {
	return (
		<Container className="container-fluid container justify-content-md-center">
         <Col lg={12}><h3>Education & Certifications</h3></Col>
			<Row className='justify-content-md-center'>
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

				<Col className="col" sm={"12"} md={"12"}  lg={"4"} xl={"4"}>
					<Card className="card educationCard"></Card>
				</Col>
			</Row>
		</Container>
	);
}
