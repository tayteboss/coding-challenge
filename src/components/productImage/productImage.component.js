import React from 'react'

import './productImage.styles.scss'

export default function ProductImage({ productImage }) {

    return(
        <React.Fragment>
            <div className="image-wrapper">
                <img src={require(`../../assets/images/${productImage}`).default} />
            </div>
        </React.Fragment>
    )
}