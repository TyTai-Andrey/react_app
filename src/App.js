import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Pay from './pages/Pay/Pay';
import Saveguard from './pages/Saveguard/Saveguard';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="body">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/products'} component={Products}/>
                    <Route path={'/pay'} component={Pay}/>
                    <Route path={'/saveguard'} component={Saveguard}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/contacts'} component={Contacts}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )

}

export default App