import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddNewService from './components/Admin/AddNewService/AddNewService';
import Footer from './components/Shared/Footer/Footer';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import ManageService from './components/ManageService/ManageService';
import MyBooking from './components/MyBooking/MyBooking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path="/placebooking/:id">
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
