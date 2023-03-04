import { Button, Row, Col, Container,ul,li } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WalMartImage from '../Images/WalMart.jpeg'

export default function WalMartComponent(){
    return(
        <div className='bgImage2'>
        <Row>
            <Col className='text-start mt-3 ps-5'>
                <h1></h1>    
            </Col>
        </Row>

        <Row className='mt-3 ps-5 pe-5'>
            <Col>
                <div>
                <img src={WalMartImage} width={250} height={200} alt="Logo" />
                </div>
            </Col>

            <Col lg={6}>
                <p>The company was founded by Sam Walton and James "Bud" Walton in nearby Rogers, Arkansas in 1962 and incorporated under Delaware General Corporation Law on October 31, 1969. It also owns and operates Sam's Club retail warehouses.<br/><br/>
                Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores in the United States, headquartered in Bentonville, Arkansas.<br/><br/>
                Agility and flexibility make this start-up culture a place where you actualize technology innovations and customer solutions in real-time. We've united the best entrepreneurs, software engineers, data scientists, merchants, and internet professionals to create seamless experiences for customers to shop anytime, anywhere.<br/> <br/>     
                </p>
            </Col>
            <Col>
                <div>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/uLZp1ux8iTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Col>
        </Row>

        <Row className='mt-3 d-flex justify-content-evenly ms-2'>
            
            <Col> 
                <h1 className='text-center textboxbg'>Required Skills:</h1>
                <ul>
                
                    <li>Bachelor's or Master's degree in Computer Science or IT, or relevant experience.</li><br/>
                    <li>Expert level knowledge and understanding of Java, .NET, Sprint boot as well as Agile methodologies.</li><br/>
                    <li>Extensive understanding of Kubernetes, Helm, microservice architecture and design, and best practices around multithreading, networking and performance tuning.</li><br/>
                    <li>Experience with third-party libraries, APIs and other open source technologies.</li><br/>
                    <li>Familiar with public cloud technologies in Microsoft Azure and Google Cloud Platform.</li>
                </ul>    
            </Col>

            <Col lg={3}>
                <h1 className='text-center textboxbg'>Pro's:</h1>
                <ul>
                    <li>Equal Opportunity Employer</li><br/>
                    <li>Flexible, hybrid work</li><br/>
                    <li>Multiple Software Develoment Areas</li><br/>
                    <li>50% 401K Match</li><br/>
                    <li>stock purchase plan</li><br/>
                </ul>
            </Col>

            <Col lg={3}>
                <h1 className=' text-center textboxbg'>Con's:</h1>
                <ul>
                    <li>Juggling an overwhelming amount of projects.</li><br/>
                    <li>Working consistent overtime and non-traditional business hours such as nights, weekends and holidays.</li><br/>
                    <li>Worklife balance impact</li><br/>
                    <li>Depending on your roler commute to office might be required</li><br/>
                    <li>Micro Management</li><br/>
                </ul>
            </Col>

            <Col className='pe-4' lg={3}>
                <h1 className=' text-center textboxbg pe'>Benefits:</h1>
                <ul>
                    <li>Beyond our great compensation package, you can receive incentive awards for your performance</li><br/>
                    <li>At Walmart, we offer competitive pay as well as performance-based incentive awards and other great benefits for a happier mind, body, and wallet</li><br/>
                    <li>Health benefits include medical, vision and dental coverage</li><br/>
                    <li>Paid time off benefits include PTO (including sick leave), parental leave, family care leave, bereavement, jury duty, and voting</li><br/>
                    <li>Stock equity incentives</li><br/>
                </ul>
            </Col>

        </Row>
        
    </div>
    );
}