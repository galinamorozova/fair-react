import React from 'react';
import './event.scss';
import mist from '../../img/mist.jpg';
import sun from '../../img/sun.jpg';
import valley from '../../img/valley.jpg';
import bridge from '../../img/bridge.jpg';
import boat from '../../img/boat.jpg';

export default function Event() {
    return(
        <section className="event">
        <div className="main-container">
            <h2>latest event</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

           <div className="all-events">
               <div className="latest-events">
                   <div className='empty'>
                       <img src={mist} alt=""/>
                   </div>
                    <article>
                        <h3>One Tree Thousand Hope</h3>
                        <p>15-16 May in Dhaka</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. lo</p>
                        <button>read more</button>
                    </article>
                    <article>
                        <h3>One Tree Thousand Hope</h3>
                        <p>15-16 May in Dhaka</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>read more</button>
                    </article>
                    <div className='empty'>
                        <img src={sun} alt=""/>
                    </div>
                </div> 

                <div className="other-events">

                    <div className="event-anonce">
                        <div className="empty">
                            <img src={valley} alt=""/>
                        </div>
                        <h3>Let’s plant 200 tree each...</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum  </p>
                    </div>
                    <div className="event-anonce">
                        <div className="empty">
                            <img src={bridge} alt=""/>
                        </div>
                        <h3>keep your house envirome..</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum  </p>
                    </div>
                    <div className="event-anonce">
                        <div className="empty">
                            <img src={sun} alt=""/>
                        </div>
                        <h3>urgent clothe needed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum  </p>
                    </div>
                    <div className="event-anonce">
                        <div className="empty">
                            <img src={valley} alt=""/>
                        </div>
                        <h3>one tree thousand hope</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum  </p>
                    </div>
                    <div className="event-anonce">
                        <div className="empty">
                            <img src={boat} alt=""/>
                        </div>
                        <h3>one tree thousand hope</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum  </p>
                    </div>
                </div>
           </div>
        </div>
    </section>
        );
    }