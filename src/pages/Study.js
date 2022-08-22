import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'




const Study = () => {
    return (

        <Container className='px-0' fluid>
            <img className="d-bloc w-100 study-img " src='people-study.jpg' />
            <Row className='justify-content-center text-center pb-3 pt-1 pt-sm-3 pt-md-4'>
                <Col>
                    <h1 class='display-3 pb-1 pb-sm-3 pb-md-5'>Estudiar en Australia</h1>
                    <Button as={Link} to='/contactanos' variant="primary" size="lg">Contactanos!</Button>
                </Col>
            </Row>
            <Row className='justify-content-center text-center'>
                <Col>
                    <p>Australia es uno de los países con mayor calidad de vida del mundo, en donde podrás estudiar y trabajar al mismo tiempo.
                        Lo más habitual entre nuestros estudiantes es empezar su aventura estudiando un curso de inglés. Y luego, a medida que mejoran su nivel de inglés, pueden empezar cursos VET o incluso Cursos Universitarios.
                        En caso de que no sepas inglés, ¡no te estreses! Los cursos de Inglés están para TODOS los niveles.
                        Y cuando alcances un nivel de inglés Intermedio Alto, ya podrás Estudiar alguno de nuestros cursos Vocacionales (VET)
                    </p>
                </Col>
            </Row>
        </Container>


    )
}

export default Study