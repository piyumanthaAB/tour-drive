import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './variables.css';
import AdminHome from './pages/admin/AdminHome';
import ClientHome from './pages/client/ClientHome';
import Home from './pages/public/Home';
import WithoutNav from './components/router/WithoutNav'
import WithNav from './components/router/WithNav'
import NotFound from './pages/public/NotFound';
import AdminTourCreate from './pages/admin/AdminTourCreate';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import ForgotPassword from './pages/public/ForgotPassword';
import ResetPassword from './pages/public/ResetPassword';
import Profile_1 from './pages/public/Profile_1';
import Profile_2 from './pages/public/Profile_2';

function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('./variables.css');
`
  
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          
          {/*🚩 ==================== routes without nav bar starts here ========================= */}
          
          <Route element={<WithoutNav />}>
            <Route exact path="/me" element={<ClientHome />} />
            

            {/* ADMIN ROUTES starts here */}
            <Route exact path="/admin" element={<AdminHome />} /> {/* this is admin home */}
            
            <Route exact path="/admin/tours/stat" element={<AdminHome />} />
            <Route exact path="/admin/tours/add-tours" element={<AdminTourCreate />} />
            <Route exact path="/admin/tours/update-tours" element={<AdminHome />} />
            <Route exact path="/admin/tours/view-all-bookings" element={<AdminHome />} />

            <Route exact path="/admin/vehicles/stat" element={<AdminHome />} />
            <Route exact path="/admin/vehicles/add-vehicle" element={<AdminHome />} />
            <Route exact path="/admin/vehicles/update-vehicle" element={<AdminHome />} />
            <Route exact path="/admin/vehicles/view-all-bookings" element={<AdminHome />} />
            
            <Route exact path="/admin/users/all" element={<AdminHome />} />
            <Route exact path="/admin/users/add" element={<AdminHome />} />
            <Route exact path="/admin/users/delete" element={<AdminHome />} />
            
            {/* ADMIN ROUTES ends here */}

          </Route>
          
          {/*🚩 ==================== routes without nav bar ends here ============================*/}

          
          {/*💥 ==================== routes WITH nav bar starts here ========================= */}
          
          <Route element={<WithNav />}>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Home />} />
            <Route exact path="/contact-us" element={<Home />} />


            <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route exact path="/reset-password" element={<ResetPassword />} />

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            
            <Route exact path="/signup-info-1" element={<Profile_1 />} />
            <Route exact path="/signup-info-2" element={<Profile_2 />} />



            <Route exact path="/contact-us" element={<Home />} />
            <Route exact path="/tours" element={<Home />} />
            <Route exact path="/tours/:id" element={<Home />} />
            <Route exact path="/vehicles" element={<Home />} />
            <Route exact path="/vehicles/:id" element={<Home />} />
          
            

            <Route path="*" element={<NotFound />} />
          </Route>


          {/*💥 ==================== routes WITH nav bar ends here ========================= */}

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
