import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./professional.scss";
export default function ProfessionalSummary() {
	return (
		<Container className="container-fluid prof-summary">
			<Row className="justify-content-md-end row">
						<Col className="col" sm={12} lg={5} md={12}>
							<Card className="card iconCard" />
                            <h3>Hi, I am Elvis Kemevor,</h3>
							<p>
								a reliable software developer with 3 years of experience and
								demonstrated web, mobile and desktop development skills. He pays
								good attention to client needs and puts in much effort using his
								technical and soft skills to convert thoughts of mind into
								computer software. Elvis is a good team player who makes sure
								his team always delivers good products within time and budget
								saving 20% of delivery time.
							</p>
							<p> <i className="far fa-address-card"></i> <b>Contact me: </b> <a href='mailto:kemevoralwise@gmail.com'>kemevoralwise@gmail.com</a> | <a href='tel:+233247417122'>+233247417122</a></p>
							
						</Col>
			</Row>
		</Container>
	);
}
