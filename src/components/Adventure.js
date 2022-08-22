import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Adventure = () => {
    return (
        <>
            <Container className='pb-1 pb-md-4 my-0  my-md-5' >
                <Row className="pt-4 pb-4 pb-md-5" >
                    <h1 class='display-3' style={{ textAlign: "center", }}>Comienza la Experiencia</h1>
                </Row>
                <Row className='justify-content-center py-3  gap-1 gap-sm-3 gap-md-5'>
                    <Col sm className="col-lg-3 d-flex align-items-stretch">
                        <Card className="text-center mx-auto" border="primary" style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://australianwayeducation.com/wp-content/uploads/2019/08/annie-spratt-dwyu3i-mqeo-unsplash-min-460x320.jpg" />
                            <Card.Body>
                                <Card.Title className='display-6'>Estudia</Card.Title>
                                <Card.Text style={{ height: '10rem' }}>
                                    Conoce como te podemos ayudar a elegir el curso que mas se adapte a tus necesidades.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="col-lg-3 d-flex align-items-stretch">
                        <Card className="text-center mx-auto" border="primary" style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://australianwayeducation.com/wp-content/uploads/2019/08/ali-yahya-7_azi5fe-ru-unsplash-min-460x320.jpg" />
                            <Card.Body>
                                <Card.Title className='display-6'>Trabaja</Card.Title>
                                <Card.Text style={{ height: '10rem' }}>
                                    Con tu visado ademas de estudiar podes trabajar. Te brindamos informacion acerca de tramites y como buscar trabajo.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col sm className="col-lg-3 d-flex align-items-stretch">
                        <Card className="text-center mx-auto" border="primary" style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://australianwayeducation.com/wp-content/uploads/2019/08/passport-2714675_1920-min-460x320.jpg" />
                            <Card.Body>
                                <Card.Title className='display-6'>Visas</Card.Title>
                                <Card.Text style={{ height: '10rem' }}>
                                    Si estas pensando en viajar a Australia para estudiar y trabajar, necesitas de un visado. Nosotros te podemos ayudar a gestionar tu visa de estudiante.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Adventure