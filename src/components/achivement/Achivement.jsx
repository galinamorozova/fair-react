import React from 'react';
import './achivement.scss';

export default function Achivement() {
    return(
        <section className="achivement">
        <div className="main-container">
            <h2>our achivement</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="achivement-icons">

                    <div className="ach-info">
                        <i className="fas fa-tree achivement-icon"></i>
                        <p className='achivement-number'>1,523</p>
                        <p className="achivement-description">trees cut</p>
                    </div>
                    <div className="ach-info">
                            <i className="fas fa-paw achivement-icon"></i>
                            <p className='achivement-number'>3,959</p>
                            <p className="achivement-description">animal lost</p>
                        </div>
                    <div className="ach-info">
                            <i className="fab fa-envira achivement-icon leaf-icon"></i>
                        <p className='achivement-number'>5,559</p>
                        <p className="achivement-description">trees saved</p>
                    </div>
                    <div className="ach-info">
                            <i className="fas fa-bolt achivement-icon"></i>
                        <p className='achivement-number'>5,559</p>
                        <p className="achivement-description">bulbs collected</p>
                        </div>
                    <div className="ach-info">
                            <i className="fas fa-cloud achivement-icon"></i>
                        <p className='achivement-number'>7,529</p>
                        <p className="achivement-description">water level</p>
                    </div>
        </div>       
        </div>
    </section>
    );
}