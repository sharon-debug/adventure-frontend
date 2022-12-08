import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
import HouseContainer from "./components/House/HouseContainer";
import {HouseContext} from "./components/HouseContext";
import  HousePage from "./components/HousePage/HousePage";
import ReviewForm from "./components/Reviews/ReviewForm";
import Login from "./components/Login/Login";
import ReviewContainer from  "./components/Reviews/ReviewContainer";
import Footer from "./components/Footer";
// import SignUp from "./Components/Signup/Signup";
import "./index.css";
// import Home from "./components/Home";

function App() {
    return (

       // const { user, setUser } = useContext(HouseContext);

  // useEffect(() => {
  //   // auto-login
  //   fetch("http://127.0.0.1:3000/houses/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((loggedUser) => setUser(loggedUser));
  //     }
  //   });
  // }, [setUser]);

  // if (!user) return <LoginForm />;
  
    <>
     
      <div className="App">
        {/* <Header loggedUser={user} /> */}
       
       
       

        <HousePage/>
        <BrowserRouter>
          
        {/* <NavBar/> */}
        
        {/* <Footer />
        */}
        <Routes>
          
          <Route
            path="/"
            element={
    <>
     {/* <HeroSection />  */}
     <h3 id="bookList-heading"> Most Visited places </h3> 
     <HouseContainer /> 
  </>
 }
 />
  {/* <Route path="/login" element={<LoginForm />} /> 
 <Route path="/signup" element={<SignUp />} />  */}
 <Route path="/houses/:id" element={<HousePage/>} />
 <Route path="/houses/:id" element={<ReviewContainer />} />
 </Routes>
 </BrowserRouter>
 </div>

 </>
 );
 } 
    
export default App;

 

// <div className='App'>
//       <BrowserRouter>
//         {/* <NavBar /> */}
//         <Routes>
          
//           <Route exact path='/Home'>
//             <Home />
//           </Route>
//           <Route exact path='/House'>
//             <HousePage />
//             <Route exact path='/Reviews'>
//             <ReviewForm />
//           </Route>
//           </Route>
//           {/* <Route exact path='/login'>
//             <Login />
//           </Route> */}
//            {/* <Route exact path='/contact Us'>
//             <About Us />
//           </Route> */}
//           <Route exact path='/'>
//             <Home />
//           </Route>
//         </Routes>
//         {/* <Footer /> */}
//       </BrowserRouter>
//     </div>
//   );
// 