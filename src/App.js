import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import Header from "./shared/components/header";
import Home from "./routs/home";
import Footer from "./shared/components/footer";
import Destination from "./routs/destination";
import Journal from "./routs/journal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Components from "./shared/components";
import OurApp from "./routs/our-app";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    // In-line scroll event listener
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the current vertical scroll position in pixels
      const viewportHeight = window.innerHeight; // Get the viewport height in pixels
      const scrollInVh = (scrollY / viewportHeight) * 100; // Convert scrollY to vh
      
      console.log(`Current scrollY in vh: ${scrollInVh.toFixed(2)}vh`); // Log scroll in vh
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);   
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Components />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/destination",
          element:<Destination/>
        },
        {
          path:"/journal",
          element:<Journal/>
        },
        {
          path:"/our-app",
          element:<OurApp/>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <div className="App">
    //   <Header />
    //   {/* <Home/> */}
    //   <Destination/>
    //   {/* <Journal /> */}
    //   <Footer />
    // </div>
  );
}

export default App;
