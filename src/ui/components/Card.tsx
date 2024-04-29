import React, { useEffect, useState } from "react";

interface Product {
    title: string;
    description: string;
    brand: string;
    price: number;
}

export const Cardtsx = () => {
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        const randomProductId = Math.floor(Math.random() * 100) + 1;
        const url = `https://dummyjson.com/products/${randomProductId}`;

        fetch(url)
            .then((res) => res.json())
            .then((data: Product) => {
                setProduct(data);
            });
    }, []);

    return (
        <div className="card">
            <p className="title">Título: {product?.title}</p>
            <p className="description">Descripción: {product?.description}</p>
            <p className="brand">Marca: {product?.brand}</p>
            <p className="price">Precio: USD$ {product?.price}</p>
        </div>
    );
};

export default Cardtsx;