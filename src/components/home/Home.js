import React, { lazy, Suspense } from 'react';

const Head = lazy(() => import('../common/Head'));
const Intro = lazy(() => import('./Intro'));
const Aggency = lazy(() => import('./Aggency'));
const BuildGreatTeam = lazy(() => import('./BuildGreatTeam'));
const VRemoteWorks = lazy(() => import('./VRemoteWorks'));
const TrustedBy = lazy(() => import('./TrustedBy'));
const HireFreelancer = lazy(() => import('./HireFreelancer'));
const FindYourWork = lazy(() => import('./FindYourWork'));
const LearnAndGrow = lazy(() => import('./LearnAndGrow'));
const Footer = lazy(() => import('../common/Footer'));
const renderLoader = () => <p>Loading...</p>;

const Home = () => {

    return (
        <div>
            <Suspense fallback={renderLoader()}>
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
            </Suspense>
        </div>
    )
}

export default Home