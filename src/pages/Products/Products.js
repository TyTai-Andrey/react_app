import React from 'react';
import Alert from '../../components/Alert'
import ShopCart from '../../components/ShopCart';

            

function Products() {
    return (
        <>
            <ShopCart/>
            <Alert namePage={'Products'}/>
        </>
    )
}

export default Products