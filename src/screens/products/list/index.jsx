import { store } from '@/contexts'
import { Container } from '@/layout'
import { DELETE } from '@/redux/slices/productsSlice'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function ProductsListScreen() {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.products)

    // const { products, dispatchProducts } = useContext(store);

    return (
        <Container>
            <ul>
                {products.map(({ title, describe, picture, id }) => (
                    <li key={id} className='bg-gray-50 p-3 m-2'>
                        <h1>{title}</h1>
                        <h2>{describe}</h2>
                        <p>{picture}</p>
                        <button
                            onClick={() => dispatch(DELETE(id))}
                        // onClick={() => dispatchProducts({
                        //     type: "DELETE",
                        //     payload: id
                        // })}
                        >X</button>
                        <Link to={`/products/${id}`}>Show</Link>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
