import React, {useContext} from 'react';
import Context from '../context';
import Block from '../components/Block';
import { NavLink } from 'react-router-dom';



function News () {
    const {arrNews} = useContext(Context)
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
                    <NavLink to="/about">
                        <div className="btn-content">
                            <span>
                                Смотреть все новости</span>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default News