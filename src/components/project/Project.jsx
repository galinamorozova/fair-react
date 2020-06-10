import React, {useState} from 'react';
import './project.scss';
import flowers from './img/flowers.jpg';
import green from '../../img/green.jpg';
import lake from '../../img/lake.jpg';
import red from '../../img/red.jpg';
import river from '../../img/river.jpg';


export default function Project() {

    const [activeTab, setActiveTab] = useState(1);

    return(
        <section className="latest-work">
            <div className="container">
                <h2>Our latest work</h2>
                <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                <div className="tab-control">
                    <button className="tab-button" onClick={() => setActiveTab(1)}>Show all</button>
                    <button className="tab-button" onClick={() => setActiveTab(2)}>Environment</button>
                    <button className="tab-button" onClick={() => setActiveTab(3)}>Climate</button>
                    <button className="tab-button" onClick={() => setActiveTab(4)}>Photography</button>
                    <button className="tab-button" onClick={() => setActiveTab(5)}>Species</button>
                </div>
                {activeTab === 1 && 
                <div className="tab-item active">
                    <div className="work-case">
                        <img src={flowers} alt=""/>
                        <div className="case-description">
                            <span>Sun Homes, Dhaka</span>
                        </div>
                    </div>
                <div className="work-case">
                    <img src={green} alt=""/>
                    <div className="case-description">
                        <span>Sun Homes, Dhaka</span>
                    </div>
                </div>
                <div className="work-case row-span-2">
                    <img src={lake} alt=""/>
                    <div className="case-description">
                        <span>Sun Homes, Dhaka</span>
                    </div>
                </div>
                <div className="work-case">
                    <img src={red} alt=""/>
                    <div className="case-description">
                        <span>Sun Homes, Dhaka</span>
                    </div>
                </div>
                <div className="work-case">
                    <img src={river} alt=""/>
                    <div className="case-description">
                        <span>Sun Homes, Dhaka</span>
                    </div>
                </div>
            </div>
                }
                {activeTab === 2 && 
                <div className="tab-item hidden-item">
                    <p>ENVIRONMENT</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <img src={green} alt=""/>
                </div>
                }
                {activeTab === 3 && 
                <div className="tab-item hidden-item">
                    <p>CLIMATE</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <img src={lake} alt=""/>
                </div>
                }
                {activeTab === 4 && 
                <div className="tab-item hidden-item">
                    <p>PHOTOGRAPHY</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <img src={red} alt=""/>
                </div>
                }
                {activeTab === 5 && 
                <div className="tab-item hidden-item">
                    <p>SPECIES</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <img src={river} alt=""/>
                </div>
                }
            </div>
        </section>
    );
}