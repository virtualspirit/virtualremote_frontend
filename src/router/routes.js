import Home from '../components/home/Home';
import ApplyUs from '../components/applyUs/ApplyUs';
import StartAProject from '../components/startProject/StartAProject';
import Designer from '../components/designer/Designer';
import Blogs from '../components/blogs/Blogs';
import BlogDetail from '../components/blogs/blogDetail/BlogDetail';
import CTO from '../components/cto/CTO';

const routes = [
    {
        path: "/",
        component: Home,
        tag: "Home"
    },
    {
        path: "/cto",
        component: CTO,
        tag: "CTO"
    },
    {
        path: "/join-us",
        component: ApplyUs,
        tag: "ApplyUs"
    },
    {
        path: "/designer",
        component: Designer,
        tag: "Designer"
    },
    {
        path: "/blogs",
        component: Blogs,
        tag: "Blogs"
    },
    {
        path: "/blog-detail",
        component: BlogDetail,
        tag: "BlogDetail"
    },
    {
        path: "/start-a-project",
        component: StartAProject,
        tag: "StartAProject"
    }
];

export default routes;