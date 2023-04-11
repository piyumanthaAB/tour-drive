import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./variables.css";
import AdminHome from "./pages/admin/AdminHome";
import ClientHome from "./pages/client/ClientHome";
import Home from "./pages/public/Home";
import WithoutNav from "./components/router/WithoutNav";
import WithNav from "./components/router/WithNav";
import WithColoredFooter from "./components/router/WithColoredFooter";
import NotFound from "./pages/public/NotFound";
import AdminTourCreate from "./pages/admin/tour related/AdminTourCreate";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import ForgotPassword from "./pages/public/ForgotPassword";
import ResetPassword from "./pages/public/ResetPassword";
import Profile_1 from "./pages/public/Profile_1";
import Profile_2 from "./pages/public/Profile_2";
import Tours from "./pages/public/Tours";
import AdminCreateUser from "./pages/admin/user related/AdminCreateUser";
import SharedElementsPreview from "./pages/SharedElementsPreview";
import SingleTour from "./pages/public/SingleTour";
import AdminCreateVehicle from "./pages/admin/vehicle related/AdminCreateVehicle";
import AdminVehicleUpdate from "./pages/admin/vehicle related/AdminVehicleUpdate";
import AdminVehicleView from "./pages/admin/vehicle related/AdminVehicleView";
import Chat from "./components/public/chat/Chat";
import Vehicles from "./pages/public/Vehicles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import toast, { Toaster } from "react-hot-toast";
import SingleVehicle from "./pages/public/SingleVehicle";
import ViewAllTours from "./pages/admin/tour related/ViewAllTours";
import AdminUpdateTour from "./pages/admin/tour related/AdminUpdateTour";
import AdminViewAllUsers from "./pages/admin/user related/AdminViewAllUsers";
import AdminUpdateUser from "./pages/admin/user related/AdminUpdateUser";
import ViewTourBookings from "./pages/client/tour related/ViewTourBookings";
import ViewVehicleRentals from "./pages/client/vehicle related/ViewVehicleRentals";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import AddCustomTour from "./pages/client/tour related/AddCustomTour";
import AdminViewCustomTour from "./pages/admin/tour related/AdminViewCustomTour";

function App() {
  const { loadUser } = useAuth();

  useEffect(() => {
    loadUser();
  }, []);

  const GlobalStyle = createGlobalStyle`
  @import url('./variables.css');
`;

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Chat />
          <Toaster />
          <Routes>
            {/*🚩 ==================== routes without nav bar starts here ========================= */}

            <Route element={<WithoutNav />}>
              <Route exact path="/client/home" element={<ClientHome />} />
              <Route
                exact
                path="/client/my-tour-bookings"
                element={<ViewTourBookings />}
              />
              <Route
                exact
                path="/client/my-vehicle-bookings"
                element={<ViewVehicleRentals />}
              />
              <Route
                exact
                path="/client/add-custom-tour"
                element={<AddCustomTour />}
              />
              {/* ADMIN ROUTES starts here */}
              <Route exact path="/admin/home" element={<AdminHome />} />{" "}
              {/* this is admin home */}
              <Route exact path="/admin/tours/all" element={<ViewAllTours />} />
              <Route exact path="/admin/tours/stat" element={<AdminHome />} />
              <Route
                exact
                path="/admin/custom-tours/all"
                element={<AdminViewCustomTour />}
              />
              <Route
                exact
                path="/admin/tours/add"
                element={<AdminTourCreate />}
              />
              <Route
                exact
                path="/admin/tours/update/:id"
                element={<AdminUpdateTour />}
              />
              <Route
                exact
                path="/admin/tours/bookings"
                element={<AdminHome />}
              />
              <Route
                exact
                path="/admin/vehicles/stat"
                element={<AdminHome />}
              />
              <Route
                exact
                path="/admin/vehicles/all"
                element={<AdminVehicleView />}
              />
              <Route
                exact
                path="/admin/vehicles/add"
                element={<AdminCreateVehicle />}
              />
              <Route
                exact
                path="/admin/vehicles/update/:id"
                element={<AdminVehicleUpdate />}
              />
              <Route
                exact
                path="/admin/users/all"
                element={<AdminViewAllUsers />}
              />
              <Route
                exact
                path="/admin/users/add"
                element={<AdminCreateUser />}
              />
              <Route
                exact
                path="/admin/users/update/:id"
                element={<AdminUpdateUser />}
              />
              {/* ADMIN ROUTES ends here */}
            </Route>

            {/*🚩 ==================== routes without nav bar ends here ============================*/}

            {/*💥 ==================== routes WITH nav bar starts here ========================= */}

            <Route element={<WithNav />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<Home />} />
              <Route exact path="/contact-us" element={<Home />} />

              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route exact path="/reset-password" element={<ResetPassword />} />

              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />

              <Route exact path="/signup-info-1" element={<Profile_1 />} />
              <Route exact path="/signup-info-2" element={<Profile_2 />} />

              <Route exact path="/contact-us" element={<Home />} />
              <Route exact path="/tours" element={<Tours />} />

              <Route exact path="/vehicles" element={<Vehicles />} />

              <Route
                exact
                path="/shared-elemets-preview"
                element={<SharedElementsPreview />}
              />
            </Route>
            {/*💥 ==================== routes WITH nav bar ends here ========================= */}

            <Route element={<WithColoredFooter />}>
              <Route exact path="/tours/:id" element={<SingleTour />} />
              <Route exact path="/vehicles/:id" element={<SingleVehicle />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
