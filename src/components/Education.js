import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Education() {
    return (
        <div className='container'>
            <h3>Education</h3>
            <div className='row g-3'>
                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">HYPERIONDEV</Card.Header>
                        <Card.Body>
                            <Card.Title>Software Engineering Certification</Card.Title>
                            <Card.Text>
                                April 2021 - October 2021
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">UNISA</Card.Header>
                        <Card.Body>
                            <Card.Title>Undergraduate</Card.Title>
                            <Card.Text>
                                August 2017 - June 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">MIDRAND GRADUATE INSTITUTE</Card.Header>
                        <Card.Body>
                            <Card.Title>Undergraduate</Card.Title>
                            <Card.Text>
                                January 2015 - March 2017
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">ELMAR COLLEGE</Card.Header>
                        <Card.Body>
                            <Card.Title>National Senior Certificate</Card.Title>
                            <Card.Text>
                                January 2014 - December 2014
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Education;