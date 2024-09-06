
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products-container');

        data.products.forEach(product => {
            const productHTML = `
                <div class="product">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <h3>$${product.price}</h3>${product.discountPercentage}% off
                    <p>Availability Status: ${product.availabilityStatus}</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            `;

            productsContainer.innerHTML += productHTML;
        });
    })
    
    .catch(error => console.error('Error:'+ error));

