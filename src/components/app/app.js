import React, { useState, useEffect } from 'react';
import axios from "axios"

import './app.styles.scss'
import Header from '../header/header.component'
import Gallery from '../gallery/gallery.component'
import ErrorBoundary from '../error-boundary/error-boundary.component'


export default function App() {

    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('')

    function handleFilterChange(e) {
        setFilter(e.target.value)
    }

    useEffect(() => {
        async function getProducts() {
            let response = await axios.get('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
            setProducts(response.data)
        }
        getProducts()
    }, []);

    return(
        <div>
            <ErrorBoundary>
                <Header products={products} handleFilterChange={handleFilterChange}/>
            </ ErrorBoundary>
            <Gallery products={products} filter={filter}/>
        </div>
    )
}