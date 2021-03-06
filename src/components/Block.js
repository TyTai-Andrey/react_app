import React from 'react';
import { NavLink } from 'react-router-dom';


function Block({params, num}) {

    const typeDeterminant = (num%4);
    let type = "short";

    if ((typeDeterminant === 1) || (typeDeterminant === 2)) {
        type = "long";
    }

    const classes = ["new_block", type];
	const bg_color = params.bg_color || "rgba(12, 18, 124, .8)";
    const bg_img = {background: params.bg_img+" center", backgroundSize: "cover"}



    return (
    	<div id={params.id} className={classes.join(' ')} style={params.bg_img && bg_img}>
            <NavLink to="/products">
                <div className="bg-color" style={{background: bg_color}}>
                    <div className="new_block-text">
                        <h2>{params.title}</h2>
                        <p>{params.description}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Block