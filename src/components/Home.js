import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Home() {
    return (
        <div className='container'>
            <Card bg='dark' text='light'>
                <Card.Header as="h6">Welcome to my website!</Card.Header>
                <Card.Img variant="top" src="https://downloader.la/temp/[Downloader.la]-62a77ae183855.jpg" style={{width: '100%', marginLeft: '0%'}}/>
                
            </Card>
        </div>
    );
}

export default Home;