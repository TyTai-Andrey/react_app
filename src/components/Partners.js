import React from 'react';
import Partner from './Partner';

import {arrParthers} from '../Date/Date'


function Partners() {

   
    return (
        <section className="partners">
            <div className="swapper">
                <h1>Наши партнёры</h1>
                
                <div className="partners-icon mt-50">
                    
                    {
                        arrParthers.map((i)=>{
                            return <Partner key={i.id} params={i}/>
                        })
                    }

                    
                </div>
            </div>
        </section>
    )
}

export default Partners