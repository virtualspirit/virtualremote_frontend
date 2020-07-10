import Home from '../components/home/Home';
import ApplyUs from '../components/applyUs/ApplyUs';
import StartAProject from '../components/startProject/StartAProject';

const routes = [
    {
        path: "/",
        component: Home,
        tag: "Home"
    },
    {
        path: "/join-us",
        component: ApplyUs,
        tag: "ApplyUs"
    },
    {
        path: "/start-a-project",
        component: StartAProject,
        tag: "StartAProject"
    }
];

export default routes;