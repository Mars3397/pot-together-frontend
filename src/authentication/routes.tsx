import Welcome from 'components/Welcome'
import SignUp from 'components/SignUp'
import Login from 'components/Login'
import Overview from 'components/Overview'
import Room from 'components/Room'
import CreatePot from 'components/CreatePot'
import SearchPot from 'components/SearchPot'
import Choose from 'components/Choose'
import IngredientsViewsPage from 'components/IngredientsViews-Usage'

export type RouteConfig = {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean; // Optional boolean property
};

const routes: RouteConfig[] = [
  // Define your routes here
  {
    path: '/welcome',
    element: <Welcome />,
    isPrivate: false,
  },
  {
    path: '/signup',
    element: <SignUp />,
    isPrivate: false,
  },
  {
    path: '/login',
    element: <Login />,
    isPrivate: false,
  },
  {
    path: '/',
    element: <Overview />,
    isPrivate: true,
  },
  {
    path: '/room/:roomId',
    element: <Room />,
    isPrivate: true,
  },
  {
    path: '/CreatePot',
    element: <CreatePot />,
    isPrivate: true,
  },
  {
    path: '/SearchPot',
    element: <SearchPot />,
    isPrivate: true,
  },
  {
    path: '/room/:roomId/Choose',
    element: <Choose />,
    isPrivate: true,
  },
  {
    path: '/ingredients-views-usage',
    element: <IngredientsViewsPage />,
    isPrivate: false,
  }
];

export default routes;