import React, {useState} from 'react';
import './testimonial.scss';
import man from '../../img/man.jpg';
import woman from '../../img/woman.png';
import man2 from '../../img/man2.jpg';
import woman2 from '../../img/woman2.jpg';


export default function Testimonial() {

    const [activeFeedback, setActiveFeedback] = useState(1);

     const decreaseFeedback = () => {
        if (activeFeedback <= 1)
             setActiveFeedback(activeFeedback+3);
         else 
             setActiveFeedback(activeFeedback-1);
     };
     const increaseFeedback = () => {

        if (activeFeedback >= 4)
             setActiveFeedback(activeFeedback-3);
         else 
            setActiveFeedback(activeFeedback+1);
     };

    return(
        <section className="testimonial">
            <h2>testimonials</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="carousel-lence">
                <div className="arrow-prev" onClick={decreaseFeedback}></div>
                <div className="arrow-next" onClick={increaseFeedback}></div>

                <div className="feedback">

                {activeFeedback === 1 && 
                    <div className="feedback-slide">
                        <div className="feedback-pic">
                            <div className="feedback-photo">
                                <img src={man} alt=""/>
                            </div>
                            <blockquote>
                                <i className="fas fa-quote-left"/>
                                Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit.
                            </blockquote>
                            <cite>Sadequr Rahman Sojib</cite>
                            <p>CEO, Fourder</p>
                        </div>
                    </div>
                }
                {activeFeedback === 2 && 
                    <div className="feedback-slide">
                        <div className='feedback-pic'>
                            <div className="feedback-photo">
                                <img src={woman} alt=""/>
                            </div>
                            <blockquote>
                            <i className="fas fa-quote-left"/>
                            Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia corrupti voluptatem laboriosam magni, dolorum rerum saepe animi mollitia, omnis modi eius voluptas esse officiis voluptate earum laudantium labore fuga quaerat.
                            </blockquote>
                            <cite>Vanesssa May</cite>
                            <p>CEO, Fourder</p>
                        </div>
                    </div> 
                }
                {activeFeedback === 3 && 
                    <div className="feedback-slide">
                        <div className="feedback-pic">
                            <div className="feedback-photo">
                                <img src={man2} alt=""/>
                            </div>
                            <blockquote>
                            <i className="fas fa-quote-left"></i>
                            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit.
                            </blockquote>
                            <cite>Serhio Aven</cite>
                            <p>CEO, Fourder</p>
                        </div>
                    </div>
                }
                {activeFeedback === 4 && 
                    <div className="feedback-slide">
                        <div className='feedback-pic'>
                            <div className="feedback-photo">
                                <img src={woman2} alt=""/>
                            </div>
                            <blockquote>
                            <i className="fas fa-quote-left"></i>
                            Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit.
                            </blockquote>
                            <cite>Elena Top</cite>
                            <p>CEO, Fourder</p>
                        </div>
                    </div>  
                }     
               </div>>
            </div>
   </section>

    );
};