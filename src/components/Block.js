import React from 'react';


function Block({params}) {
	// console.log (params.params.productPhoto)
	// const photo = {background: `url('${params.productPhoto}') center`, backgroundSize: "cover"}
    const classes = ["new_block", params.block_type];
	const bg_color = params.bg_color;
    const bg_img = {background: params.bg_img+" center", backgroundSize: "cover"}


    return (
    	<div id={params.id} className={classes.join(' ')} style={params.bg_img && bg_img}>
            <div className="bg-photo" style={{background: bg_color}}>
                <div className="new_block-text">
                    <h2>{params.title}</h2>
                    <p>{params.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Block