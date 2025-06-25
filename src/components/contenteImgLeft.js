import React from 'react'

function contenteImgLeft({imagem, textoImagem, texto}) {
  return (
    <Container>
        <Row>
            <Col>
                <img src={ imagem } alt={ textoImagem } />
            </Col>
            <Col>
                <p  {texto} />
            </Col>
        </Row>
    </Container>
)
}

export default contenteImgLeft