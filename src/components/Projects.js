import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Projects() {
    return (
        <div className='container'>
            <h3>Projects</h3>
            <div className='row g-3'>
                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">COVID-19 Heatmap</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                A lot of data is currently being produced on the pandemic on a global scale.{<br />}
                                A user-friendly interactive heatmap which allows the users to query and retrieve data about the country of their choice. {<br />}
                                The service allows users to register and login to the service before they are able to perform any queries using the service.{<br />}
                                The data source is updated every 24HRs to ensure relevent and up to date data.
                            </Card.Text>
                            <Button variant="primary" href="https://covidheatmap-keke-lwandiso.herokuapp.com/" target='_blank'>Open COVID-19 Heatmap</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">COVID-19 CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This is a user-friendly interactive CLI version of the COVID-19 heatmap app, which allows users to to query and retrieve data about the country of their choice.{<br />}
                                You can download the python script and run it on your device from the provided link. {<br />}
                                The data source is updated every 24HRs to ensure relevent and up to date data.
                            </Card.Text>
                            <Button variant="primary" href="https://covid-heatmap.s3.eu-west-2.amazonaws.com/Terminal_Covid_App/covid_terminal.py" target='_blank'>Download COVID-19 CLI</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Poised CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Program calculates the costs of a building project for a customer and tracks those involved till completion.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Poised" target='_blank'>Poised Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Task Manager CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The program helps progress tracking by means of managing tasks and users of an organisation.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Task_manager" target='_blank'>Task Manager Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Helicopter Game</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This game lets the user navigate a helicopter to dodge missiles to win the game.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Game" target='_blank'>Helicopter Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Financial Calculator CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Program gives user access to two different financial calculators. 'Investment' and 'Home loan repayment' calculator.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Finance_Calculator" target='_blank'>Financial Calculator Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Poised Database CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This program is the same as the previously mentioned 'Poised' project but instead of only keeping data for the duration of runtime.{<br />}
                                This program stores the data in a MySQL database for later access, with the edition of Structural Engineers, Project Managers.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Poised_Engineering" target='_blank'>Poised Database Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">Book Store CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The Book store program allows the user to enter, update, delete, search and view all the books in the ebookstore database using the
                                JDBC to run the different operations.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/Book_Store" target='_blank'>Book Store Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-md-6 col-lg-6'>
                    <Card bg='dark' text='light'>
                        <Card.Header as="h6">String Calculator CLI</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The user will enter an expression in string format and the output/result will be in string format.{<br />}
                                The operator prefix the operands in the expressions.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Lwandiso-Ntlanga/String_Calculator" target='_blank'>String Calculator Git Repo</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
}

export default Projects;