import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { imageListClasses } from '@mui/material';
import { height } from '@mui/system';

function About() {
    return (
        <div className='container'>
            <h3>About</h3>
            <Card bg='dark' text='light'>
                <Card.Header as="h6">About Me</Card.Header>                
                <Card.Body>
                    <Card.Text>
                        I have a strong working background in fast-paced environments and have worked in EdTech as a Code reviewer,
                        Operations, Sales, Marketing and Tutoring where I developed strong organisation, communication,
                        transferable and problem-solving skills.{<br />}

                        I graduated from a HyperionDev Software Engineering bootcamp and aspire to further master my skills
                        as well as learn new skills to build my career into a leadership role.{<br />}{<br />}

                        I pride myself on continuous learning because even though I graduated,
                        I seek opportunities to learn skills I do not know that are of value to making me a valued Software Engineer through means of courses or mentoring.{<br />}
                        Do have a look at my projects to understand my skillset range through the applications I created.{<br />}{<br />}

                        Currently seeking an opportunity to leverage my newly found skill set in a positive and advantageous
                        way whilst also gaining valuable experience and skills.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card bg='dark' text='light'>
                <Card.Header as="h6">SovTech</Card.Header>
                <Card.Img variant="top" src="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/sovtech_logo.png" style={{width: '50%', marginLeft: '25%'}}/>
                <Card.Body>
                    <Card.Text>
                        I would like to be a part of your developer team because it is an environment where I think I will be pushed and challenged.{<br />}
                        Because of your unconventional learning style as it is hands on coupled, which I believe certainly I will be the challenged to adapt to,
                        in order to grow and produce effective results. {<br />}
                        As one of the country's leading 'custom' software development companies, I have no doubts about the various technologies
                        I will be exposed to due to the nature of the company providing 'custom' solutions.{<br />}{<br />}

                        To be a part of the open culture which provides access to network with various tech experts and acquiring their knowledge would be invaluable. {<br />}
                        As I will be leaarning the ropes of the tech industry and how to effectively grow and use the newly acquired skills and also how to consistantly strive
                        to deliver the very best software solutions, innovating with the latest technologies and cloud software.{<br />}{<br />}

                        Sovtech has an impressive track record of achievements, and I would appreciate learning and working somewhere there is constant innovation
                        and forward thinking and I believe that can be achieved through your graduation programme.{<br />}{<br />}

                        I strongly relate to your Tech, Adapt and Results spex/values which largely stem from your mission and vision statements that I believe in,
                        because of the impact on peoples lives in the work they do and their businesses due to partnering with Sovtech.{<br />}
                        It would be a profound accomplishment to be able to produce solutions that have such a meaningful impact, and be called as one of the team that made it happen.{<br />}{<br />}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>

            <Card bg='dark' text='light'>
                <Card.Header as="h6">My Journey</Card.Header>
                <Card.Img variant="top" src="https://downloader.la/temp/[Downloader.la]-62a777da9cfc3.jpg" style={{width: '80%', marginLeft: '10%'}}/>
                <Card.Body>
                    <Card.Text>
                        From a young I have been curious and imaginative of technology and the mechanics that are behind it.{<br />}
                        My hobbies entailed dissembling small devices in attempts to put it all together,
                        sometimes I failed to reassemble them but key note being I now knew how it functioned at the core of it.{<br />}{<br />}

                        My desire for programing came in High school Elmar College with the introduction to HTML,
                        creating a single webpage I thought I could create something to rival Google. {<br />}
                        The thought I could be responsible for one of the millions of programs in the world, led to my relentless focus to try and know everything about the world of software development, I learned a lot about myself along the journey.{<br />}
                        I learned the importance of collaboration through active engagement with developing Software in University because of the resources available and student community which is more than what I had access to when I was young.{<br />}{<br />}

                        Problem solving is an instinctive quality I have learned to fine tune for better results, it is not about only applying the solution but the construction of the solution to the problem that I acquired knowledge about through HyperionDev. {<br />}
                        All along I only thought being a Software Engineer was about how many programming languages/tools one knows,
                        but only a bad craftsman would blame their tools for their inability to effectively solve a problem thus I learned to be methodical and structured in my software development.{<br />}{<br />}

                        Thus I am capable of producing a solution through means of project planning, system architectural methods, meeting project requirements, developing a program, implementing and documenting it along with the use of programming languages as tools.{<br />}

                        It sure is a dream come true to be able to reproduce the same inner mechanics of the technologies that inspired me to start my journey.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;