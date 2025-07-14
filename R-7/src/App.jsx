import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sign_in from './component/Sign-in';
import Login from './component/Login';
import AllJob from './Page/AllJob';
import MyApplication from './Page/MyApplication';
import Home from './Page/Home';
import ErrorHandle from './Error_Page/ErrorHandle';
import MainPages from './Home/MainPages';
import PostNewJob from './Page/PostNewJob';
import ViewYourJobs from './Page/ViewYourJobs';
import RouteAccess from './Home/RouteAccess';
import JobDetails from './Page/JobDetails';
import { useContext, useEffect } from 'react';
import { Context } from './main';
import axios from 'axios';

const App = () => {
  const { setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}user/getuser`, {
          withCredentials: true,
        });
        setUser(res.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };

    fetchUser();
  }, []); // ✅ Run only once on first load

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPages />,
      errorElement: <ErrorHandle />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Sign_in /> },
        { path: '/', element: <Home /> },
        { path: '/alljob', element: <AllJob /> },
        { path: '/myapplication', element: <MyApplication /> },
        { path: '/postnewjob', element: (<RouteAccess allowedRole="Employer"><PostNewJob /></RouteAccess>), },
        { path: '/viewpostjobs', element: (<RouteAccess allowedRole="Employer"><ViewYourJobs /></RouteAccess>), },
        { path: '/job/:id', element: <JobDetails /> },
      ],
    },]);
  return <RouterProvider router={router} />;
};

export default App;
