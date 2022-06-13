import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Contacts() {
    return (
        <div className='container'>
            <h3>Contacts</h3>

            <Card bg='dark' text='light'>
                <Card.Body>
                    <Card.Text>
                        {<strong> Full Name: </strong>} Lwandiso Ntlanga {<br />}
                        {<strong> Contact Number:</strong>} 084 822 8176{<br />}
                        {<strong> Email:</strong>} lwandisontlanga@yahoo.com{<br />}
                    </Card.Text>
                    <Card.Link href="linkedin.com/in/lwandiso-ntlanga">LinkedIn</Card.Link>
                    <Card.Link href="https://github.com/Lwandiso-Ntlanga?tab=repositories">GitHub</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Contacts;