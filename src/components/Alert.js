import React from 'react';
import { NavLink } from 'react-router-dom';

function Alert({namePage}) {
    
    return (
        <section className="popular">
            <div className="swapper">
                <div className="alert">
                    <h1>{namePage}</h1>
                    <h4>Тут пока что ничего нет</h4>
                    <p>Данная страница находится в разработке.</p>
                    <p>Пока что тут ничего нет.</p>
                    <NavLink to="/" >Вернуться на главную</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Alert