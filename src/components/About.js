import React from 'react';
import { IoLogoCss3 } from 'react-icons/io';
import { SiAzuredevops } from 'react-icons/si';
import { HiCode } from 'react-icons/hi';

import profile from '../assets/img/github_image.png';

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profile} alt="Iosif Dobos Profile" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        I'm a graduate student at Technological University Dublin with a BSc degree in Computer Science.
                        I have pursued my internship at Revenue where I have been involved on different
                        projects working with programming languages such as AngularJS, jQuery, JavaScript as frontend,
                        Java as backend and Jenkins to test and deploy the applications. I love to learn and explore new technologies
                        and often amazed by how technology has grown in the recent years.
                        </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Iosif B. Dobos</span><br />
                                <span>
                                    Dublin, Ireland
                                    </span><br />
                                <span>+353894199005</span><br />
                                <span>iosifdobos22@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="https://drive.google.com/file/d/1kZzeo4SrKXJhEw53Djrv-_p0x6iKLqOv/view?ths=true" className="button" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-download"></i>
                                    Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container-fluid">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4 white-color">What I do?</h1>
                        <h4 className="display-4 white-color padding">Here are some of my expertise.</h4>
                    </div>
                    <hr></hr>
                </div>
            </div>
            <div className="row text-center">
                <div className="four columns">
                    <div className="expertise">
                        <HiCode size="100" color="red" />
                        <h3 className="white-color">Web Development</h3>
                        <p>
                            I have experience building websites using JavaScript, AngularJS, React, HTML, CSS as frontend and
                            Java, Python, Flask and Django as backend.
                            </p>
                    </div>
                </div>
                <div className="four columns">
                    <div className="expertise">
                        <IoLogoCss3 className="css-logo" size="100" color="green" />
                        <h3 className="white-color">Algorithms & Data Structures</h3>
                        <p>As part of my degree in Computer Science, I have good background over fundamental concepts of DSA.</p>
                    </div>
                </div>
                <div className="four columns">
                    <div className="expertise">
                        <SiAzuredevops className="dev-ops" size="100" color="blue" />
                        <h3 className="white-color">Dev Ops</h3>
                        <p>
                            I have pursued my internship at Revenue, being involved in a DevOps team working with tools like Jenkins and Doker.
                            </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About;
