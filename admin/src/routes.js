import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/:anything',
        name: 'NotFound',
        component: NotFound
    }
]