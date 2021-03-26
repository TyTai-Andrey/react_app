import React, {useContext} from 'react';
import Product from './Product';
import Context from '../context';
import Block from '../components/Block';



function News () {
    const {arrNews} = useContext(Context)
    console.log(arrNews)
    return (
        <section className="new">
            <div className="swapper">
                <h1>Новости компании</h1>
                <div className="new_blocks">
                    {arrNews.map((item)=>{
                        return <Block key={item.id} params={item}/>
                    })}                 
                </div>
                <div className="btn btn-white">
                    <div className="btn-content">
                        <span>Смотреть все новости</span>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News