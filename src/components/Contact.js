import React from 'react';

const Contact = () => {
    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Get In Touch.</span></h1>

                </div>

                <div className="ten columns">

                    <p className="lead">For more information about me, please fill out the form and I'll reach to you as soon as possible. Thank you!</p>

                </div>

            </div>

            <div className="row">
                <div className="eight columns">

                    <form action="" method="post" name="contactForm" id="contactForm">
                        <fieldset>

                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" size="35" id="contactName" name="contactName" />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="email" size="35" id="contactEmail" name="contactEmail" />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" size="35" id="contactSubject" name="contactSubject" />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" ></textarea>
                            </div>

                            <div>
                                <button type="submit" className="submit">Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>
                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            Iosif B. Dobos<br />
						   Cedarwood Rise <br />
						   Glasnevin, Dublin 11<br />
                            <span>+353894199005</span>
                        </p>
                    </div>

                    {/* <div className="widget widget_tweets">
                        <h4 className="widget-title">Latest Tweets</h4>
                        <ul id="twitter">
                            <li>
                                <span>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                           <a href="#loreispum">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b><a href="#day">2 Days Ago</a></b>
                            </li>
                            <li>
                                <span>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi
                           <a href="#loreispum">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b><a href="#day">3 Days Ago</a></b>
                            </li>
                        </ul>
                    </div> */}
                </aside>
            </div>
        </section>
    )
}

export default Contact;
