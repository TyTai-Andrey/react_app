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

   

    


    //Устанавливает начальное состояние корзины товаров в LocalStorege

    // console.log(JSON.parse(localStorage.getItem('products')))


    // Запоминает состояние корзины товаров в LocalStorege
    // useEffect отслеживает изменение products

    // Увеличивает количество товара в корзине при нажатии на кнопку
    // function addProductSum(id) {
    //     let newProducts = []

    //     products.map(j=>{
    //         if (j.id === id) {
    //             j.sum += 1;
    //             newProducts.push(j);
    //         } else {
    //             newProducts.push(j);
    //         }
    //     })
    //             setProducts (newProducts);
    // }
    
    // Удаляет товар из корзины
    // function removeProductSum(id) {
    //     let newProducts = []

    //     products.map(j=>{
    //         if (j.id !== id) {
    //             newProducts.push(j);
    //         }
    //     })
    //     setProducts (newProducts);
    // }

    // Уменьшает количество товара в корзине при нажатии на кнопку
    // function reduceProductSum(id) {
    //     let newProducts = []

    //     products.map(j=>{
    //         if (j.id === id) {
    //             j.sum -= 1;
    //             // Если сумма равна 0, то товар удаляется из корзины
    //             if (j.sum === 0) {
    //                 console.log(1)
    //                 removeProductSum(id)
    //             } else {
    //                 newProducts.push(j);
    //             }
    //         } else {
    //             newProducts.push(j);
    //         }
    //     })
    //             setProducts (newProducts);
    // }

    // Добавляет товар в корзину или увеличивает количесво
    // function addProduct(id) {

    //     //Проверка на наличие id товара в корзине
    //     if (products.find(i=>i.id===id) && Products_Option.find(i=>i.id===id)) {
    //         addProductSum(id)
    //     } else if (Products_Option.find(i=>i.id===id)) {
    //         Products_Option.map((i, index)=>{
    //             if (i.id === id) {
    //                 let a = Products_Option.slice(index,index+1)
    //                 a[0].sum = 1;

    //                 setProducts (products.concat(a))
    //             }
    //         })
    //     } else {
    //         alert("error")
    //     }
    // }

// addProduct, addProductSum, reduceProductSum, removeProductSum
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