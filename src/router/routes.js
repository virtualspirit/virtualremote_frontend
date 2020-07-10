import Home from '../components/home/Home';
import ApplyUs from '../components/applyUs/ApplyUs';
import StartAProject from '../components/startProject/StartAProject';
import Blogs from '../components/blogs/Blogs';
import BlogDetail from '../components/blogs/blogDetail/BlogDetail';

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
    }
];

export default routes;