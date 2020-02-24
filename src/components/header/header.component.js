import React, { useState, useEffect } from 'react';

import './header.styles.scss'
import Filter from '../filter/filter.component'
import ErrorBoundary from '../error-boundary/error-boundary.component';

export default function Header({ products, handleFilterChange } = props) {

    return(
        <header className="header">
            <h1>Women's tops</h1>
            <div className="header__filter">
                <Filter products={products} handleFilterChange={handleFilterChange}/>
            </div>
        </header>
    )
}