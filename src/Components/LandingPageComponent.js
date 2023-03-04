//Student Name: Ulises Ortega
//Project Name: 5 Places I would be Interest to work for.
//Date: 3.3.23
//Peer Review Name: Aisha Mashrah
//Review: I really like you formated the front page and how you have the important information inside the card
//good work using the react browser router to link to other pages, nice ad easy to read to the company pages
//I like the additional information, good job and the pictures and videos you added.

import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeslaImg from '../Images/Tesla.jpeg'
import MicrosoftImg from '../Images/Microsoft.png'
import AdobeImg from '../Images/Adobe.png'
import BestBuyimg from '../Images/BestBuy.jpeg'
import WalMartImg from '../Images/WalMart.jpeg'

export default function LandingPageComponent() {
    return (
            <Container className='bgImage'>
                <Row>
                    <Col>
                        <h1 className='text-center mt-3 titleformat'><span> Five Places that I would like to work for work for: </span></h1>
                    </Col>
                </Row>
                
                <Row className='CardContainer mt-5 ps-3'>
                    <Col >
                
                {/* Card 1 */}
                         <div className='Item'>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={TeslaImg} width={250} height={250}/>
                                <Card.Body>
                                    <Card.Title>TESLA</Card.Title>
                                    <Card.Text className='text-dark'>
                                        One of the leading company when it comes to Electric Vehicles.
                                        <br/>
                                        <br/>
                                        Let's find out Why?
                                        <br/>
                                        You should work for Tesla.
                                    </Card.Text>
                                    <Button variant="primary" as={Link} to="Tesla">Company's Info</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                {/* Card 2 */}
                <Col>
                <div className='Item'>
                <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={MicrosoftImg} width={250} height={250}/>
                        <Card.Body>
                            <Card.Title>MICROSOFT</Card.Title>
                            <Card.Text className='text-dark'>
                                One of the most versatile companies when it comes to software development.
                                <br/>
                                <br/>
                                 Let's find out Why?
                                 <br/>
                                 I should work Microsoft.
                            </Card.Text>
                            <Link to="./Assets/Tesla">
                                <Button variant="primary" as={Link} to="Microsoft">Company's Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                <Col>
                {/* Card 3 */}
                <div className='Item'>
                <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={AdobeImg} width={250} height={250}/>
                        <Card.Body>
                            <Card.Title>ADOBE</Card.Title>
                            <Card.Text className='text-dark'>
                                One of the most creative places to work developing for their multiple platforms 
                                <br/>
                                <br/>
                                Let's find out Why?
                                 <br/>
                                 I should work for Adobe. 
                            </Card.Text>
                            <Button variant="primary" as={Link} to="Adobe">Company's Info</Button>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                {/* Card 4 */}
                <Col>
                <div className='Item'>
                <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={BestBuyimg} width={250} height={250}/>
                        <Card.Body>
                            <Card.Title>BEST BUY</Card.Title>
                            <Card.Text className='text-dark'>
                                A great oportunity to work on their Ecommerce Website.
                                <br/>
                                <br/>
                                Let's find out Why?
                                 <br/>
                                 I should work for BestBuy. 
                            </Card.Text>
                            <Button variant="primary" as={Link} to="BestBuy">Company's Info</Button>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                <Col>
                {/* Card 5 */}
                <div className='Item'>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={WalMartImg} width={250} height={250}/>
                        <Card.Body>
                            <Card.Title>WALMART</Card.Title>
                            <Card.Text className='text-dark'>
                                Hight Traffic Ecommerce, with a broad variety of products.
                                <br/>
                                <br/>
                                Let's find out Why?
                                 <br/>
                                 I should work for BestBuy. 
                            </Card.Text>
                            <Button variant="primary" as={Link} to="WalMart">Company's Info</Button>
                        </Card.Body>
                    </Card>
                </div>      
                    </Col>
                </Row>
                        
            </Container>
    );
}