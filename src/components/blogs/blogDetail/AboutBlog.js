import React from 'react';
import blogImg1 from '../../../assets/blogimg/blog-img1.png';
import blogImg2 from '../../../assets/blogimg/blog-img2.png';
import IconQuote from '../../../assets/Label/IconQuote.svg';
import LazyImage from '../../common/LazyImage';

const AboutBlog = () => {
    return (
        <div className="blogpage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left">
                        <div className="blogpage-info">
                            <button className="topic-date"><a className="topic pointer">DESIGN</a><span className="blog-date">2 weeks ago</span></button><br />
                            <h2 className="blog-heading">The World Is Our Interface - the Evolution of UI Design</h2>
                            <hr className="blog-hr" />
                            <div className="blog-first-sec">
                                <div className="blog-text">
                                    <p className="blog-para">
                                        Today computers are omnipresent. You can’t escape them. We are living in an exciting age of design and evolving user interfaces; a new technological era where our clothes, accessories, homes, cars, and streets have become one massive user interface—dubbed by some as the “ambient intelligence world.”
                                    </p>
                                    <p className="blog-para">
                                        The evolution of UI design can be broken down into four periods: the age of tools, the age of the machine, the age of software, and the age of the self. With this rapid growth, an exploration into human interaction with objects, the environment, and technology has become essential.
                                    </p>
                                </div>
                                <h3 className="blog-para-heading">The Age of Tools</h3>
                                <div className="blog-text">
                                    <p className="blog-para">
                                        Using primitive tools, early humans began to communicate by drawing representations of animals and nature on stone surfaces. Hieroglyphs, which were highly symbolic, were one of the first methods used to communicate. This symbolism would later develop into art, writing, documentation, and story-telling.
                                    </p>
                                    <p className="blog-para">
                                        Over time, the tools became more sophisticated, resulting in some (e.g., pens) still being in wide use today. We have come full circle and are once more using simple symbols and iconography, such as emojis, to signal emotions and communicate subtleties that go beyond words.
                                    </p>
                                </div>
                                <LazyImage src={blogImg1} alt={blogImg1} className="blog-first-img img-fluid" />
                                <h3 className="blog-para-heading">The Age of Machines</h3>
                                <div className="blog-text">
                                    <p className="blog-para">
                                        The industrial revolution emphasized productivity. During “the age of the machine,” we built objects at scale to help our lives become easier. It was a time when the hardware itself was still the main “user interface.”
                                    </p>
                                    <p className="blog-para">
                                        One example of this is the invention of the typewriter in 1868 by Christopher Latham Sholes. We began tapping physical keys to create words, still using our hands, but with the help of the typewriter as a replacement for the pen. It saved time and helped create a consistent and practical format that could be adopted quickly.
                                    </p>
                                </div>
                            </div>
                            <div className="blog-second-sec">
                                <LazyImage src={IconQuote} alt={IconQuote} className="blog-quote" noNeedWidth={true} />
                                <h3 className="blogsecond-para-heading">A user interface is like a joke. If you have to explain it, it’s not that good.</h3>
                                <p className="blogsecond-para"> Martin Leblanc, iconfinder.com </p>
                                <div className="secondimg-sec">
                                    <LazyImage src={blogImg2} alt={blogImg2} className="blog-sec-img" />
                                    <p className="image-cont-title">An extensive mobile onboarding sequence with instructions. </p>
                                </div>
                                <h3 className="blog-para-heading">The User Interface Is Becoming the World Around Us</h3>
                                <div className="blog-text">
                                    <p className="blog-para">
                                        To help the ambient world to become a user interface, Google’s
                                        <a className="pointer">Advanced Technologies and Projects (ATAP Lab)</a> developed
                                        <a className="pointer"> Project Soli,</a>
                                        a new sensing technology that uses a miniature radar for motion tracking the human hand. Enabling touchless gesture interactions, the interactions feel physical and responsive because feedback is generated by the haptic sensation of fingers touching each other.
                                    </p>
                                </div>
                            </div>
                            <hr className="blog-hr" />
                            <div className="blog-share">
                                <ul className="blog-share-ul">
                                    <li className="blog-share-li">Share</li>
                                    <li className="blog-share-li"><a className="pointer"><i className="fa fa-facebook" /></a></li>
                                    <li className="blog-share-li"><a className="pointer"><i className="fa fa-twitter" /></a></li>
                                    <li className="blog-share-li"><a className="pointer"><i className="fa fa-linkedin" /></a></li>
                                    <li className="blog-share-li"><a className="pointer"><i className="fa fa-link" /></a></li>
                                    <li className="blog-share-li">1.4K SHARES</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBlog
