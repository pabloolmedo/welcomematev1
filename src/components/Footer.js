import React from 'react'
import { useState } from 'react';
import { Col, Container, Row, Card, NavLink } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const Footer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Container fluid className='bg-dark py-0 py-sm-3 py-md-5'>
                <Row className='justify-content-center py-3  gap-1 gap-sm-3 gap-md-5'>
                    <Col >
                        <Card className='bg-dark text-white border-0 mx-auto' style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>WELCOME MATE AUSTRALIA</Card.Title>
                                <Card.Text>
                                    Asesoramiento para experiencias educativas. Estudia, Trabaja y vive la experiencia que tanto esperabas en uno de los paises con mejor calidad de vida. Haz amigos de todo el mundo, explora y vive experiencias unicas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  >
                        <Card className='bg-dark text-white border-0 mx-auto' style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>COMIENZA LA EXPERIENCIA</Card.Title>
                                <Card.Text>
                                    Conoce como te podemos ayudar a elegir el curso que mas se adapta a tus necesidades, rellena el formulario y nos comunicaremos contigo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  >
                        <Card className='bg-dark text-white border-0 mx-auto' style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>CONOCE WELCOME MATE AUSTRALIA</Card.Title>
                                <NavLink className='text-white' onClick={handleShow}>Trabaja con nosotros</NavLink>
                                <NavLink as={Link} to='/quienesSomos' className='text-white'>Quienes Somos</NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='bg-dark text-white border-0 mx-auto' style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>ENLACES DE INTERES</Card.Title>
                                <NavLink as={Link} to='/aviso-legal' className='text-white'>Aviso legal</NavLink>
                                <NavLink as={Link} to='/preguntas-frecuentes' className='text-white'>FAQ's</NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Trabaja con Nosotros</Modal.Title>
                </Modal.Header>
                <Modal.Body>Escribenos! info@welcomemateaustralia.com</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Footer