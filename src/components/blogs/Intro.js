import React from 'react'

const Intro = () => {
    return (
        <section id="bloglist_intro" className="clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="bloglist-intro-info">
                            <p className="first-bloglist-heading">The VRemote blog</p>
                            <h2 className="main-bloglist-heading">Read insightful articles.</h2>
                            <p className="last-bloglist-heading">The VRemote blog gives you insights that are useful for designers, developers,<br /> executives, company owners, and finance experts.</p>
                            <div className="blog_search">
                                <div className="input-group input_search_group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text input_search" ><i className="fa fa-search" /></span>
                                    </div>
                                    <input type="search" className="form-control input_search_control" placeholder="What are you looking for?" aria-label aria-describedby />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
