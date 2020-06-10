import React, {useState} from 'react';
import './home.scss';
import slide1 from '../../img/toscana.jpg';
import slide2 from '../../img/s120.jpg';
import slide3 from '../../img/river.jpg';

export default function Home() {
    const [activeDot, setActiveDot] = useState(1);

    const decreaseSlide = () => {
        if (activeDot <= 1)
            setActiveDot(activeDot+2);
        else 
            setActiveDot(activeDot-1);
    };
    const increaseSlide = () => {

        if (activeDot >= 3)
            setActiveDot(activeDot-2);
        else 
            setActiveDot(activeDot+1);
    };


    return(
        <section className="slide-gallery">     
                <div className="gallery-container">
                {activeDot === 1 && 
                    <div className="slide active">
                        <img src={slide1} alt="" />
                        <div className="protect">
                            <h3>Protect </h3> 
                            <h2> nature the environment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Read  More</button>  
                        </div>
                    </div>
                }
                {activeDot === 2 && 
                    <div className="slide">
                        <img src={slide2} alt=""/>
                        <div className="protect">
                            <h3>Save </h3> 
                            <h2> the water</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Read  More</button>  
                        </div>  
                    </div>
                }
                {activeDot === 3 && 
                    <div className="slide">
                        <img src={slide3} alt=""/>
                        <div className="protect">
                            <h3>Recycle </h3> 
                            <h2> the trash</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Read  More</button>  
                        </div> 
                    </div>
                }
                    
                    <div className="dots">
                        <button className={activeDot === 1 ? '.dot activeDot' : ''} onClick={() => setActiveDot(1)}></button>
                        <button className={activeDot === 2 ? '.dot activeDot' : ''} onClick={() => setActiveDot(2)}></button>
                        <button className={activeDot === 3 ? '.dot activeDot' : ''} onClick={() => setActiveDot(3)}></button>
                    </div>

                    <div className= "arrow-prev" onClick={decreaseSlide}></div>
                    <div className="arrow-next" onClick={increaseSlide}></div>
                    
                  
            
                </div>
              </section>
              
    );
}