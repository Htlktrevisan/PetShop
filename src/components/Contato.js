import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contato() {
  return (
    <Container fluid className='contato'>
    <Row>
      <Col>
      <h1>Fale Conosco</h1>
      
      </Col>
    </Row>
    <Row>
      <Col lg="6" md="6" sm="12">
        <form>
          <div className='linhaForm'>
            <input type='text' placeholder='Nome' required/>
          </div>
          <div className='linhaForm'>
            <input type='email' placeholder='Email' required/>
          </div>
          <div className='linhaForm'>
            <textarea placeholder='Mensagem' required/>
          </div>
          <div className='linhaFoem'>
            <input type='submit' value="Enviar Agora"/>
          </div>
        </form>
      </Col>
      <Col lg="6" md="6" sm="12"></Col>      
    </Row>
    <Row>
      <Col>
        <div>
          <input className='ladoEsquerdo' type='Number' placeholder='Telefone'></input> 
        </div>
      </Col>
    </Row>
  </Container>
  
    
  
  )
}

export default Contato
