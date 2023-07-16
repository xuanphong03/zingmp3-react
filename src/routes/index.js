import Home from '~/pages/Home';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Library from '~/pages/Library';

export const routesPublic = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/zingchart',
        component: Zingchart,
    },
    {
        path: '/radio',
        component: Radio,
    },
    {
        path: '/library',
        component: Library,
    },
];
