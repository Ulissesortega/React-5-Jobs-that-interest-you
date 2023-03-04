import { Button, Row, Col, Container,ul,li } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdobeImage from '../Images/Adobe.png'

export default function AdobeComponent(){
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
                    <img src={AdobeImage} width={250} height={200} alt="Logo" />;
                    </div>
                </Col>

                <Col lg={6}>
                    <p>Adobe Inc., originally called Adobe Systems Incorporated, is an American multinational computer software company incorporated in Delaware and headquartered in San Jose, California.<br/><br/>
                    We believe in creativity for all, so we give everyone the tools to discover and express their creativity through photography, design, video, animation, web and mobile user experiences, and more. <br/> <br/> 
                    We not only deliver strong financial results, but we’re also driving incredible innovation, adding millions of new customers, delivering billions of experiences across screens, and processing trillions of data transactions online.
                   
                    
                    </p>
                </Col>
                <Col>
                    <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/eg3R0JZxvys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>

            <Row className='mt-3 d-flex justify-content-evenly ms-2'>
                
                <Col> 
                    <h1 className='text-center textboxbg'>Required Skills:</h1>
                    <ul>
                    
                        <li>Proficient in Java solid knowledge of ETL, MongoDB and Redis</li>
                        <li>BS or MS in Computer Science or related field</li>
                        <li>History of delivering high quality software to customers in a timely manner.</li>
                        <li>Positive outlook, motivated learner with strong written and verbal communication.</li>
                        <li>Ability to lead and mentor team members.</li>
                    </ul>    
                </Col>

                <Col lg={3}>
                    <h1 className='text-center textboxbg'>Pro's:</h1>
                    <ul>
                        <li>Delevop and polish your skills as you work in our platforms</li>
                        <li>Oportunities to switch to different developement areas</li>
                        <li>100% remote work depending on the roll</li>
                        <li>Profesional and Economical growth hand to hand</li>
                        <li>Exclusive employee discount on Microsoft products and services</li>
                    </ul>
                </Col>

                <Col lg={3}>
                    <h1 className=' text-center textboxbg'>Con's:</h1>
                    <ul>
                        <li>Matrixed organization that can have overlap</li>
                        <li>Internal processes might take longer due to burocracy</li>
                        <li>Micro Management</li>
                        <li>50% 401K Match</li>
                        <li>Limited Stock Options</li>
                    </ul>
                </Col>

                <Col className='pe-4' lg={3}>
                    <h1 className=' text-center textboxbg pe'>Benefits:</h1>
                    <ul>
                        <li>Personal and family services.</li>
                        <li>Family Group Life Insurance</li>
                        <li>Commuter benefits.</li>
                        <li>30 Days Vacation</li>
                        <li>Salaray Above Market Average</li>
                    </ul>
                </Col>

            </Row>
            
        </div>
        </div>
    );
}