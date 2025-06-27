import React from "react";
import bannerUm from '../imagens/adestramento/banner-adestramento.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Adestramento = () => {
	return (
		<div>
			<Container flud>
				<Row>
					<Col>
					<img src={bannerUm} className="adestramentodeCães" alt="Banner 1" />
					</Col>
				</Row>
			</Container>
			<Container flud>
				<Row>
					<Col>
						<p></p>
						<p></p>
					</Col>
				</Row>
			</Container>
		</div>
		
		
	);
};

export default Adestramento;
