import React from 'react';
import './contact.scss';
import ContactMap from '../ContactMap/ContactMap';



export default function Contact() {
    return(
        <section className="in-touch">
                <div className="main-container">
                    <h2>get in touch</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="map-message">

                        <div className="map">
                            <h4>our office info</h4>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Elephant Road, Dhaka 1205, Bangladesh</span> <br/>
                            <i className="fas fa-mobile-alt"></i>
                            <a href="tel:+79081312119">+7(814)-233-22-11</a><br/>
                            <i className="fas fa-envelope mail"></i>
                            <span className='mail'>youremail@mail.com</span>
                            <ContactMap/>

                        </div>
                        <div className="drop-message">
                            <h4>drop a message</h4>
                            <div className="message-form">
                                <input type="text" placeholder="Name *" required/>
                                <input type="email" placeholder="Email *" required/>
                                <input type="text" placeholder="Subject *" required/>
                                <input type="text" placeholder="Message *" required/>
                            </div>
                            <button>send</button>
                        </div>
                    </div>
                </div>
            </section>

    );
}