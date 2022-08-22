import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <>
            <Container fluid className='pb-1 pb-md-4 my-0 my-md-5 bg-half'>
                <Container>

                    <Row className='justify-content-center pb-3 pt-1 pt-sm-3 pt-md-4'>
                        <Col>
                            <Card className='bg-secondary shadow'>
                                <Card.Title className='text-center display-3'>Te Ayudamos con Todo!</Card.Title>
                                <Card.Body className='text-center'>
                                    <p ><strong>Welcome Mate</strong> es una plataforma que conecta a estudiantes internacionales con instituciones educativas Australianas, para que mediante la visa de estudiante puedan estudiar una gran diversidad de cursos, ya sean de Inglés, cursos Vocacionales (VET), cursos TAFE (Technical and Further Education) o cursos universitarios, con esta visa los alumnos también tienen la posibilidad de trabajar y vivir una experiencia mucho más completa.
                                    </p>
                                    <p>Una vez que hayamos planificado juntos tu viaje, nos ponemos manos a la obra: nos ocupamos de todos los trámites y gestiones (visado, escuela, carta de inmigración, etc.). Y lo hacemos desde nuestra propia experiencia, asesorándote y resolviendo todas las dudas que tengas. ¡No te dejaremos solo/a!</p>
                                    <p>Sabemos que viajar al otro lado del mundo, puede ser una de las mejores experiencias de tu vida, pero como también puede ser una muy compleja si no estás bien asesorado.</p>

                                    <Button as={Link} to='/contactanos' variant="primary" size="lg">Contactanos!</Button>
                                    {/* <p>Nace después de que nuestro fundador Adiel, viviera la experiencia de Australia por más de 3 años y tomará la decisión de comenzar a ayudar a todos los que quisieran venir a estudiar a uno de los países con mejor calidad del mundo.
                                        Sabemos que viajar al otro lado del mundo, puede ser una de las mejores experiencias de tu vida, pero como también puede ser una muy compleja si no estás bien asesorado.
                                    </p> */}
                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>
                </Container>

            </Container>

        </>

    )
}

export default Intro