import { Button, Row, Col, Container,ul,li } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBuyImage from '../Images/BestBuy.jpeg'


export default function BestBuyComponent(){
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
                <img src={BestBuyImage} width={250} height={200} alt="Logo" />
                </div>
            </Col>

            <Col lg={6}>
                <p>Best Buy is a consumer electronics retailer with operations in the U.S., Mexico, and Canada<br/><br/>
                With corporate headquarters located in Richfield, Minn., Best Buy is a leading specialty retailer of consumer electronics in the United States and Canada.<br/> <br/> 
                At Best Buy, millions of customers rely on us to deliver the technology they need to learn, work, and stay connected. As a member of the Technology & Analytics team, you will contribute to solving the ever-changing technological challenges of both our customers and your fellow employees
               
                
                </p>
            </Col>
            <Col>
                <div>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/CankVwiqO3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Col>
        </Row>

        <Row className='mt-3 d-flex justify-content-evenly ms-2'>
            
            <Col> 
                <h1 className='text-center textboxbg'>Required Skills:</h1>
                <ul>
                
                    <li>Agile development practical experience</li><br/>
                    <li>Good understanding of mobile design and application patterns including experience with React Native or native iOS/Android.</li><br/>
                    <li>Test-driven development, refactoring, automated unit test, integration test, functional test, and continuous integration/deployment.</li><br/>
                    <li>Proficiency with Object Oriented Design principles and patterns.</li><br/>
                    <li>Strong debugging and troubleshooting skills</li>
                </ul>    
            </Col>

            <Col lg={3}>
                <h1 className='text-center textboxbg'>Pro's:</h1>
                <ul>
                    <li>Work for one of the lead interactive e-commerce websites</li><br/>
                    <li>Ability to switch to different areas of software development</li><br/>
                    <li>100% remote work depending on the roll</li><br/>
                    <li>Profesional and Economical growth hand to hand</li><br/>
                    <li>Exclusive employee discount on BestBuy products and services</li><br/>
                </ul>
            </Col>

            <Col lg={3}>
                <h1 className=' text-center textboxbg'>Con's:</h1>
                <ul>
                    <li>Workload completetition might required +40 work hours</li><br/>
                    <li>Commute to diferent locations might be required</li><br/>
                    <li>Micro Management</li><br/>
                    <li>50% 401K Match</li><br/>
                    <li>Limited Stock Options</li><br/>
                </ul>
            </Col>

            <Col className='pe-4' lg={3}>
                <h1 className=' text-center textboxbg pe'>Benefits:</h1>
                <ul>
                    <li>Personal and family services.</li><br/>
                    <li>Family Group Life Insurance</li><br/>
                    <li>Commuter benefits.</li><br/>
                    <li>30 Days Vacation</li><br/>
                    <li>Salaray Above Market Average</li><br/>
                </ul>
            </Col>

        </Row>
        
    </div>
    );
}