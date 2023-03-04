import { Button, Row, Col, Container,ul,li } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MicrosoftImage from '../Images/Microsoft.png'



export default function MicrosoftComponent(){
    return(
        <div>
            <div className='bgImage2'>
            <Row>
                <Col className='text-start mt-3 ps-5'>
                    <h1></h1>    
                </Col>
            </Row>

            <Row className='mt-3 ps-5 pe-5'>
                <Col>
                    <div>
                    <img src={MicrosoftImage} width={250} height={200} alt="Logo" />;
                    </div>
                </Col>

                <Col lg={6}>
                    <p>Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States.<br/><br/>
                    Microsoft's best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.<br/> <br/>
                    Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services.
                    </p>
                </Col>
                <Col>
                    <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/Vw6utYElVFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>

            <Row className='mt-3 d-flex justify-content-evenly ms-2'>
                
                <Col> 
                    <h1 className='text-center textboxbg'>Required Skills:</h1>
                    <ul>
                    
                        <li>Proficient in one or more C, C#, C++, Java, C++ or JavaScript</li><br/>
                        <li>History of delivering high quality software to customers in a timely manner.</li><br/>
                        <li>Experience building distributed systems leveraging technologies like REST APIs, queues, and databases</li><br/>
                        <li>Passion or previous experience developing cyber security software.</li><br/>
                        <li>Expertise in data pipelines or distributed systems</li><br/>
                    </ul>    
                </Col>

                <Col lg={3}>
                    <h1 className='text-center textboxbg'>Pro's:</h1>
                    <ul>
                        <li>Delevop and polish your skills as you work in our platforms</li><br/>
                        <li>Oportunities to switch to different developement areas</li><br/>
                        <li>100% remote work depending on the roll</li><br/>
                        <li>Profesional and Economical growth hand to hand</li><br/>
                        <li>Exclusive employee discount on Microsoft products and services</li><br/>
                    </ul>
                </Col>

                <Col lg={3}>
                    <h1 className=' text-center textboxbg'>Con's:</h1>
                    <ul>
                        <li>Workload might required over 40 hours of work</li><br/>
                        <li>Intensive workload per Software engineer</li><br/>
                        <li>Micro Management</li><br/>
                        <li>50% 401K Match</li><br/>
                        <li>Limited Stock Options</li><br/>
                    </ul>
                </Col>

                <Col className='pe-4' lg={3}>
                    <h1 className=' text-center textboxbg pe'>Benefits:</h1>
                    <ul>
                        <li>Aetna PPO and HSA plans</li><br/>
                        <li>Family Group Life Insurance</li><br/>
                        <li> Unlimited PTO</li><br/>
                        <li>30 Days Vacation</li><br/>
                        <li>Salaray Above Market Average</li><br/>
                    </ul>
                </Col>

            </Row>
            
        </div>
        </div>
    );
}