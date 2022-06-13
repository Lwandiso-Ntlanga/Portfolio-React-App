import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Technical() {
    return (
        <div className='container'>
            <h3>Skills</h3>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">Technical Skills</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Java{<br />}
                        Python{<br />}
                        MySQL{<br />}
                        Object Oriented Programming (OOP) {<br />}
                        Agile Extreme Programming{<br />}
                        Junit Testing{<br />}
                        Systems Design{<br />}
                        GitHub{<br />}
                        Java Database Connectivity (JDBC){<br />}
                        Microsoft Word, Excel, Power point, Outlook{<br />}
                        Local Area Network (LAN){<br />}
                        Sales{<br />}
                        Direct Marketing{<br />}

                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">Basic Skills</Card.Header>
                <Card.Body>
                    <Card.Text>
                        HTML{<br />}
                        CSS{<br />}
                        Bootstrap{<br />}  
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">Soft Skills</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Communication{<br />}
                    Analytical{<br />}
                    Adaptable{<br />} 
                    Problem Solving{<br />}
                    Collaborative{<br />}
                    Critical Thinking{<br />} 
                    Effective communication formal and informal{<br />}
                    Time management{<br />}
                    Conflict resolution{<br />} 
                    Risk management{<br />} 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>      
    );
  }
  
  export default Technical;