import React from 'react';
import './blog.scss';
import bird from '../../img/bird.jpg';
import landscape from '../../img/landscape.jpg';
import mountain from '../../img/mountain.jpg';


export default function Blog() {
    return(
        <section className="blog">
        <div className="main-container">
            <h2>latest blog</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="all-posts">
                <div className="post">
                    <div className="pic"><img src={bird} alt=""/></div>
                    
                    <article>
                        <h4>Climate change is affecting bird migration</h4>
                        <div className="date-comments">
                            <div className="data-author">
                                    <i className="fas fa-clock"></i>
                                    <span>Aug 19, 2016</span>
                                    <i className="fas fa-user"></i>
                                    <span>Admin</span>
                            </div>
                            <div className="comments">
                                <i className="fas fa-comments"></i>
                                <span>0</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                        <div className='tempLink'>read more</div>
                    </article>
                </div>

                <div className="post">
                    <div className="pic"><img src={landscape} alt=""/></div>
                    
                    <article>
                        <h4>How to avoid indoor air pollution?</h4>
                       <div className="date-comments">
                           <div className="data-author">
                                <i className="fas fa-clock"></i>
                                <span>Aug 19, 2016</span>
                                <i className="fas fa-user"></i>
                                <span>Admin</span>
                           </div>
                           <div className="comments">
                            <i className="fas fa-comments"></i>
                            <span>0</span>
                           </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                        <div className='tempLink'>read more</div>
                    </article>
                </div>

                <div className="post">
                    <div className="pic"><img src={mountain} alt=""/></div>
                    
                    <article>
                        <h4>Threat to Yellowstone’s grizzly bears.</h4>
                       <div className="date-comments">
                           <div className="data-author">
                                <i className="fas fa-clock"></i>
                                <span>Aug 19, 2016</span>
                                <i className="fas fa-user"></i>
                                <span>Admin</span>
                           </div>
                           <div className="comments">
                            <i className="fas fa-comments"></i>
                            <span>0</span>
                           </div>
                       </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                    <div className='tempLink'>read more</div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    );
}