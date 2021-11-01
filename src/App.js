import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services/Services';
import ServiceDetailsAndBookingInfo from './pages/Services/ServiceDetailsAndBookingInfo/ServiceDetailsAndBookingInfo';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MyBookings from './pages/Dashboard/MyBookings/MyBookings';
import ManageAllBookings from './pages/Dashboard/ManageAllBookings/ManageAllBookings';
import AddNewServices from './pages/Dashboard/AddNewService/AddNewService';
import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:singleServiceID">
              <ServiceDetailsAndBookingInfo></ServiceDetailsAndBookingInfo>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addNewService">
              <AddNewServices></AddNewServices>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
