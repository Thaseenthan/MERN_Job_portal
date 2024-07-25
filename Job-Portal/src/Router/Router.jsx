import {createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import SignupForm from "../components/SignupForm";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        
        {
          path:"/post-job",
          element: <CreateJob/>
        },
        {
          path:"/my-job",
          element: <MyJobs/>
        },
        {
          path:"edit-jobs/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch("http://localhost:3000/all-jobs/"+ params.id)
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/job/:id",
          element: <JobDetails/>
        },
        {
          path:"/sign-up",
          element: <SignupForm/>
        },
        {
          path:"/log-in",
          element: <Login/>
        },

        
        
      ]
    },
  ]);

  export default router;