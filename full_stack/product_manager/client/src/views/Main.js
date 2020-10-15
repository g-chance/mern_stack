import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import AllUsers from '../components/AllProducts'

const Main = (props) => {
    const [state, setState] = useState("Loading...")
    const [products, setProducts] = useState(
        []
    )
    useEffect(() => {
        axios.get('http://localhost:8000/api/index')
            .then(res => {
                setState(
                    res.data.message
                )
            })
            .catch(err => console.log(err));
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data.products)
                setProducts(
                    res.data.products
                )
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            "Message from the back end: {state}"
            <AllUsers products={products} setProducts={setProducts}></AllUsers>
        </div>
    )
}

export default Main