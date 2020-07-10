import React from 'react';
import Head from '../common/Head';
import Footer from '../common/Footer';
import Idea from '../common/Idea';
import Intro from './Intro';
import List from './List';
import Articles from './Articles';

const Blogs = () => {
    return (
        <>
            <Head />
            <Intro />
            <List />
            <Articles />
            <div className="develop-learn-grow-6"><Idea /> </div>
            <Footer />
        </>
    )
}

export default Blogs
