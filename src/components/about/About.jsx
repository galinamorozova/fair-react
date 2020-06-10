import React from 'react';
import './about.scss';


export default function About() {
    return(
        <section className="welcome">
        <div className="main-container">
            <h1>welcome to green fair</h1>
            <p className="description">Our Green Fire Organization is one of the non profit organization near you. Get our services like</p>
            <div className="all-services">
                <div className="service">
                    <i className="fas fa-recycle"></i>
                    <h4>eco system</h4>
                    <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                </div>
                <div className="service">
                    <i className="fas fa-recycle"></i>
                    <h4>recycling</h4>
                    <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                </div>
                <div className="service">
                 
                    <i className="fas fa-recycle"></i>
                    <h4>water refine</h4>
                    <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                </div>
                <div className="service">
                  
                    <i className="fas fa-recycle"></i>
                    <h4>solar system</h4>
                    <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                </div>
            </div>
        
        </div>
    </section>
    );
}