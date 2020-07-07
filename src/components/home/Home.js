import React from 'react';
import Head from '../common/Head';
import Intro from './Intro';
import Aggency from './Aggency';
import BuildGreatTeam from './BuildGreatTeam';
import VRemoteWorks from './VRemoteWorks';
import TrustedBy from './TrustedBy';
import HireFreelancer from './HireFreelancer';
import FindYourWork from './FindYourWork';
import LearnAndGrow from './LearnAndGrow';
import Footer from '../common/Footer';

const Home = () => {

    return (
        <div>
            <Head />
            <Intro />
            <Aggency />
            <BuildGreatTeam />
            <VRemoteWorks />
            <TrustedBy />
            <HireFreelancer />
            <FindYourWork />
            <LearnAndGrow />
            <Footer />
        </div>
    )
}

export default Home