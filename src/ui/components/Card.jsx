import React, { useEffect, useState } from "react";

export const Card = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const randomProductId = Math.floor(Math.random() * 100) + 1;
        const url = `https://dummyjson.com/products/${randomProductId}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    return (
        <div className="card">
            <p className="title">Título: {product.title}</p>
            <p className="description">Descripción: {product.description}</p>
            <p className="brand">Marca: {product.brand}</p>
            <p className="price">Precio: USD$ {product.price}</p>
        </div>
    );
};
