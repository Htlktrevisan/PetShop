import React from "react";
import bannerUm from '../imagens/adestramento/banner-adestramento.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Foto1 from '../imagens/adestramento/adestramento1.jpg';
import Foto2 from '../imagens/adestramento/adestramento2.jpg';
import Foto3 from '../imagens/adestramento/adestramento3.jpg';
import Foto4 from '../imagens/adestramento/adestramento4.jpg';
import Foto5 from '../imagens/adestramento/adestramento5.jpg';




const Adestramento = () => {
	return (
		<div>
			<Container flud>
				<Row>
					<Col className="bannercachorros px-0">
					<img src={bannerUm} className="adestramentodeCães" alt="Banner 1"  />
					</Col>
				</Row>
			</Container>
			<Container className="py-5">
				<Row>
					<Col>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at tortor finibus, egestas ex laoreet, cursus sem. Vivamus tincidunt metus eget velit ornare fermentum. Nullam imperdiet mauris non nunc condimentum, scelerisque sodales diam viverra. Aliquam erat volutpat. Suspendisse mattis eu augue in sagittis. Aliquam erat volutpat. Cras ac arcu varius, rutrum leo lobortis, consequat metus. Phasellus ac ligula a lacus suscipit finibus at eu sapien. Nullam vitae turpis ex. Donec condimentum nibh metus, sit amet consequat orci porttitor volutpat. Aenean at sem in arcu vulputate iaculis. Praesent eget pretium tellus. Mauris vestibulum nisl non mi interdum rutrum. Quisque interdum orci et tempus aliquam. Duis placerat et ex vitae vehicula.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at tortor finibus, egestas ex laoreet, cursus sem. Vivamus tincidunt metus eget velit ornare fermentum. Nullam imperdiet mauris non nunc condimentum, scelerisque sodales diam viverra. Aliquam erat volutpat. Suspendisse mattis eu augue in sagittis. Aliquam erat volutpat. Cras ac arcu varius, rutrum leo lobortis, consequat metus. Phasellus ac ligula a lacus suscipit finibus at eu sapien. Nullam vitae turpis ex. Donec condimentum nibh metus, sit amet consequat orci porttitor volutpat. Aenean at sem in arcu vulputate iaculis. Praesent eget pretium tellus. Mauris vestibulum nisl non mi interdum rutrum. Quisque interdum orci et tempus aliquam. Duis placerat et ex vitae vehicula.</p>
					</Col>
				</Row>
			</Container>

			<Container className="adestramentosbloco">
				<Row className="adestramentosbloco">
					<Col className="adestramentosbloco">
					<img src={Foto1} className="fotosAdestramentos" alt="foto"></img>
					<img src={Foto2} className="fotosAdestramentos" alt="foto"></img>
					<img src={Foto3} className="fotosAdestramentos" alt="foto"></img>
					<img src={Foto4} className="fotosAdestramentos" alt="foto"></img>
					<img src={Foto5} className="fotosAdestramentos" alt="foto"></img>

					</Col>
				</Row>
			</Container>

			<Container className="py-5">
				<Row>
					<Col>
					<h2>Perguntas Frequentes</h2>
					</Col>
				</Row>
				<Row>
					<Col>
					<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
					</Col>
				</Row>
			</Container>
		</div>
		
		
	);
};

export default Adestramento;
