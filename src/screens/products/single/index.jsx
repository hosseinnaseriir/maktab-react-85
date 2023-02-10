import { store } from '@/contexts';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';

export function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState()
    const { products } = useContext(store);
    const params = useParams();

    useEffect(() => {
        const currentProduct = products.filter(i => +i.id === +params.id)[0];
        setSingleProduct(currentProduct)
    }, [params.id]);

    return (
        <>
            <div>{singleProduct?.title}</div>
            <div>{singleProduct?.describe}</div>
            <div>{singleProduct?.picture}</div>
        </>
    )
}
