import React, {useContext, Fragment} from 'react';
import Product from './Product';
import Context from '../../context';
import { NavLink } from 'react-router-dom';


//Блок со всеми товарами

//Принимает 2 массива с объектами, который передаётся в <Product/>
//Объекты массива содержат:


// Products_Option:
//id: string - id товара
//productPhoto: string - ссылка на изображение
//title: string - название товара
//description: string - описание товара
//newPrice: string - новая цена товара

// Products_extraOption:
//id: string - id товара
//iconAction: true/false - отображать/скрыть иконку "Акция"
//iconHit: true/false - отображать/скрыть иконку "Хит"
//iconBestPrice: true/false - отображать/скрыть иконку "Лучшая цена"
//oldPrice: string/null - старая цена товара (не обязательный параметр)


function Popular() {
    const {Products_Option, Products_extraOption} = useContext(Context)

    // console.log(popularProducts)
    // console.log(popularProducts_extraOption)

    return (
       
            <Fragment>
            {   
                (Products_extraOption.length === 0 || Products_Option === 0) ? null :

                <section className="popular">
                    <div className="swapper">
                        <h1>Популярные товары</h1>
                        <div className="popular_products">
                        {
                            Products_extraOption.map((i,index)=>{
                                let j = Products_Option.find(a=>a.id===i.id)
                                return(<Product key={j.id} extraParams={Products_extraOption[index]} params={j}/>)
                            })
                        }
                        </div>
                        <div className="btn btn-white mt-30">
                            <NavLink to="/products">
                                <div className="btn-content">
                                    <span>Смотреть каталог</span>
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
            }

            </Fragment>
        
        
    )

}

export default Popular