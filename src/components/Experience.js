import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Experience() {
    return (
        <div className='container'>
            <h3>Experience</h3>
            <Card bg='dark' text='light'>
                <Card.Header as="h6">Code Reviewer</Card.Header>
                <Card.Body>
                    <Card.Title>HYPERIONDEV</Card.Title>
                    <Card.Text>Freelance {<br/>} November 2021 - Present </Card.Text>
                    <Card.Text> Perform quality assurance. {<br/>} Developer assessment. </Card.Text>
                </Card.Body>
            </Card>
            <br/>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">Sales Associate</Card.Header>
                <Card.Body>
                    <Card.Title>SPAR SOUTH AFRICA</Card.Title>
                    <Card.Text>Full time {<br/>} December 2019 - February 2020 </Card.Text>
                    <Card.Text> 
                        Offered customer service in a professional engaging method contributing to increased sales. {<br/>} 
                        Operating the cash registers, managing financial transactions, and balancing drawers.{<br/>} 
                        Initiated roles to increase instore sales to achieve established goals.{<br/>}
                        Revamped and reorganised merchandise to enhance the customer experience.{<br/>}
                        Had to liaise between different departments.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">Network Administrator</Card.Header>
                <Card.Body>
                    <Card.Title>HOUSE OF HOMEWORK</Card.Title>
                    <Card.Text>Part time {<br/>} December 2016 - August 2019 </Card.Text>
                    <Card.Text> 
                        Designed and headed the operations of setting up and maintaining the company computer systems and local server to ensure efficient daily operations. {<br/>} 
                        Reduced the cost of infrastructure and time of operations by implementing innovative solutions.{<br/>} 
                        Mentored fellow colleagues on the basics of computer networking, simplified complex concepts.{<br/>}
                        Educated students on basic computer literacy and assisted them on their research assignments and homework.{<br/>}
                        Coordinated and marketed cycling in the communities to encourage active lifestyles across all ages,
                        partnered with a bicycle supplier to provide rental bicycles and safety equipment and a professional cyclist as a guide for every trip.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            
            <Card bg='dark' text='light'>
                <Card.Header as="h6">Steward</Card.Header>
                <Card.Body>
                    <Card.Title>ILOSI EVENTS MANAGEMENT</Card.Title>
                    <Card.Text>Part time {<br/>} August 2017 - June 2019 </Card.Text>
                    <Card.Text> 
                        Managed the registration of clients for events, serving food and beverages for conferences, corporate functions. {<br/>} 
                        Developed comprehensive communication skills through assisting clients in an informative and helpful way,
                        working effectively under pressure retaining focus on the details clients specified and resolving issues clients encountered.{<br/>} 
                        Directed inexperienced colleagues through maintaining unit cohesion with the end game to meet or exceed the client expectations
                        which was to ensure that customers had a seamless experience, whilst punctual on the customer orders.{<br/>}
                        Ensured professional customer service.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Experience;
