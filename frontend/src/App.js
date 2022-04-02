import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Header2 from './components/Header2';
import BaishakhiScreen from './screens/BaishakhiScreen';
import CartScreen from './screens/CartScreen';
import EidScreen from './screens/EidScreen';
import GentsScreen from './screens/GentsScreen';
import GirlsScreen from './screens/GirlsScreen';
import HomeScreen from './screens/HomeScreen';
import KidsScreen from './screens/KidsScreen';
import LoginScreen from './screens/LoginScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Header2 />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/baishakhi' component={BaishakhiScreen} exact />
          <Route path='/eid' component={EidScreen} exact />
          <Route path='/gents' component={GentsScreen} exact />
          <Route path='/girls' component={GirlsScreen} exact />
          <Route path='/kids' component={KidsScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
