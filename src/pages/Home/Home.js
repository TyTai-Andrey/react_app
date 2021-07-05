import React from 'react';
import Popular from '../../components/Product_components/Popular';
import News from '../../components/News';
import Partners from '../../components/Partners';
import ShopCart from '../../components/ShopCart';


function Home() {
    return (
        <>
            <ShopCart/>
            <Popular/>
            <News/>
            <Partners/>
        </>
    )
}

export default Home