import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Pay from './pages/Pay/Pay';
import Saveguard from './pages/Saveguard/Saveguard';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

import Context from './context';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop_cart from './components/Shop_cart';


function App() {

    const Products_Option = [
        {id: "p1", productPhoto: "https://www.ejin.ru/wp-content/uploads/2017/09/14-890.jpg", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя', price: '799 '},
        {id: "p2", productPhoto: "https://doseng.org/uploads/posts/2018-06/1528416202_11.jpg", title:'Набор юного инстаблогера', description: 'Посмотрите на него. Он покажет всем какой вы классный и творческий. Главное не забыть посидеть на подоконнике с бокаль...', price: '13 666 '},
        {id: "p3", productPhoto: "https://get.wallhere.com/photo/2560x1600-px-landscape-river-rock-waterfall-1105857.jpg", title:'Лампа. Просто лампа.', description: 'В паре с загадочным цветком добавит загадочности вашему интерьеру', price: '1 789 '},
        {id: "p4", productPhoto: "https://i.pinimg.com/736x/59/17/5b/59175b1f980587cd8aa4c800835c9dec.jpg", title:'Классные деревянные минималистичные часы с...', description: 'Все в ту же копилку загдочности вашего интерьера и вашей натуры', price: '1 899 '},
    ]

    const Products_extraOption = [
        {id: "p1", iconAction: true,  iconHit: true,  iconBestPrice: true,   oldPrice: '1 499 '},
        {id: "p2", iconAction: true,  iconHit: false, iconBestPrice: false,  oldPrice: null},
        {id: "p3", iconAction: false, iconHit: true,  iconBestPrice: false,  oldPrice: '2 699 '},
        {id: "p4", iconAction: true,  iconHit: true,  iconBestPrice: false,  oldPrice: '2 199 '},
    ]


    //Устанавливает начальное состояние корзины товаров в LocalStorege
    const [ products, setProducts ] = useState( JSON.parse(localStorage.getItem('products')) || [])

    // console.log(JSON.parse(localStorage.getItem('products')))


    // Запоминает состояние корзины товаров в LocalStorege
    // useEffect отслеживает изменение products
    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(products, null, 3));
    },[products])

    // Увеличивает количество товара в корзине при нажатии на кнопку
    function addProductSum(id) {
        let newProducts = []

        products.map(j=>{
            if (j.id === id) {
                j.sum += 1;
                newProducts.push(j);
            } else {
                newProducts.push(j);
            }
        })
                setProducts (newProducts);
    }
    
    // Удаляет товар из корзины
    function removeProductSum(id) {
        let newProducts = []

        products.map(j=>{
            if (j.id !== id) {
                newProducts.push(j);
            }
        })
        setProducts (newProducts);
    }

    // Уменьшает количество товара в корзине при нажатии на кнопку
    function reduceProductSum(id) {
        let newProducts = []

        products.map(j=>{
            if (j.id === id) {
                j.sum -= 1;
                // Если сумма равна 0, то товар удаляется из корзины
                if (j.sum === 0) {
                    console.log(1)
                    removeProductSum(id)
                } else {
                    newProducts.push(j);
                }
            } else {
                newProducts.push(j);
            }
        })
                setProducts (newProducts);
    }

    // Добавляет товар в корзину или увеличивает количесво
    function addProduct(id) {

        //Проверка на наличие id товара в корзине
        if (products.find(i=>i.id===id) && Products_Option.find(i=>i.id===id)) {
            addProductSum(id)
        } else if (Products_Option.find(i=>i.id===id)) {
            Products_Option.map((i, index)=>{
                if (i.id === id) {
                    let a = Products_Option.slice(index,index+1)
                    a[0].sum = 1;

                    setProducts (products.concat(a))
                }
            })
        } else {
            alert("error")
        }
    }


    return (
        <BrowserRouter>
            <Context.Provider value={{Products_Option, Products_extraOption, products, addProduct, addProductSum, reduceProductSum, removeProductSum}}>
                <Navbar/>
                {document.location.href === '/pay' ? <Shop_cart/> : null}
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
            </Context.Provider>
        </BrowserRouter>
    )

}

export default App