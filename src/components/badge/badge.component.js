import React from 'react'

import './badge.styles.scss'

export default function Badge({ isSale, isExclusive }) {

    return(
        <React.Fragment>
            {isSale && 
                <div className="badge badge--sale">
                    <p>Sale</p>
                </div>
            }
            {isExclusive && 
                <div className="badge badge--exclusive">
                    <p>Exclusive</p>
                </div>
            }
        </React.Fragment>
    )
}