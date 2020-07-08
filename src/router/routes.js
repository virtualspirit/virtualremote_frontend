import Home from '../components/home/Home';
import ApplyUs from '../components/applyUs/ApplyUs';
import Pricing from '../components/pricing/Pricing';

const routes = [
    {
        path: "/",
        component: Home,
        tag: "Home"
    },
    {
        path: "/join-us",
        component: ApplyUs
    },
    {
        path: "/pricing",
        component: Pricing
    }
];

export default routes;