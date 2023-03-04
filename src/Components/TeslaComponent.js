import { Button, Row, Col, Container,ul,li } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeslaImg from '../Images/Tesla.jpeg'


export default function TeslaComponent(){
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
                    <img src={TeslaImg} width={250} height={200} alt="Logo" />
                    </div>
                </Col>

                <Col lg={6}>
                    <p>Tesla aims to accelerate world’s transition to a sustainable energy by ensuring we provide a seamless and frictionless experience to our customers. <br/><br/>
                    To meet this goal, Tesla is constantly striving to innovate and provide best in class services through introduction of pioneering new products and services. To that end, Tesla is seeking hardworking and passionate software engineers as various levels.<br/><br/>
                    These engineers will be part of a startup team that is focused on delivering a highly scalable platform that enables growth of current and future products and services to our customers.</p>
                </Col>
                <Col>
                    <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/oOOe03gaFHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>

            <Row className='mt-3 d-flex justify-content-evenly ms-2'>
                
                <Col> 
                    <h1 className='text-center textboxbg'>Required Skills:</h1>
                    <ul>
                        <li>Computer CS or Equivalent Expirience</li><br/>
                        <li>Proficient in one or more Python, Golan, C++, Java, C++ or Ruby</li><br/>
                        <li>Ability to write well-organized code.</li><br/>
                        <li>Eagerness to collaborate cross-functionally with other engineering teams</li><br/>
                        <li>Genuine curiosity and willingness to understand how our products are designed.</li><br/>
                    </ul>    
                </Col>

                <Col lg={3}>
                    <h1 className='text-center textboxbg'>Pro's:</h1>
                    <ul>
                        <li>Delevop and polish your skills as you work in our platforms</li><br/>
                        <li>Oportunities to switch to different developement areas</li><br/>
                        <li>100% remote work depending on the roll</li><br/>
                        <li>Profesional and Economical growth hand to hand</li><br/>
                        <li>Exclusive employee discount on Tesla products and services</li><br/>
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
                        <li>Aetna PPO and HSA plans, 2 medical plan options with $0 payroll deduction</li><br/>
                        <li>Family Group Life Insurance</li><br/>
                        <li> Unlimited PTO</li><br/>
                        <li>30 Days Vacation</li><br/>
                        <li>Salaray Above Market Average</li><br/>
                    </ul>
                </Col>

            </Row>
            
        </div>
    );
}