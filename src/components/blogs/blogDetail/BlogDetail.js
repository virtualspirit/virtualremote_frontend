import React from 'react';
import Head from '../../common/Head';
import Footer from '../../common/Footer';
import Idea from '../../common/Idea';
import AboutBlog from './AboutBlog';
import OtherPost from './OtherPost';

const BlogDetail = () => {
    return (
        <>
            <Head />
            <section id="blogpage_intro" className="clearfix"></section>
            <AboutBlog />
            <OtherPost />
            <div className="develop-learn-grow-6"><Idea /></div>
            <Footer />
        </>
    )
}

export default BlogDetail;