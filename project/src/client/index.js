console.log("Frontend server starting!");

// ------------ Demonstrating existing functionality -----------

// fetch('/api/products')
//     .then(response => response.json())
//     .then(products => console.log("DEMO: getting all products", products));
//
// fetch('/api/products/2')
//     .then(response => response.json())
//     .then(products => console.log("DEMO: getting a single product", products));
//
// fetch('/api/products', {
//     method: 'post',
//     body: JSON.stringify({
//         name: 'a new product',
//         description: 'it is shiny',
//         price: 777
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then(response => response.json())
//     .then(res => console.log("DEMO: adding a product", res))
//     .catch(e => console.log("DEMO: Adding a new product doesn't work for the production source, but this is how we would've done it!", e));

// ------------ Testing new functionality -----------

    // ... add code to make fetches to your new routes here ...
fetch('api/posts')
    .then(res => res.json())
    .then(posts => console.log(posts));

fetch('/api/posts/2')
    .then(response => response.json())
    .then(posts => console.log("DEMO: getting a single post", posts));

fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify({
        userId: 2,
        title: 'hey hey hey',
        body: 'You gotta let me go with you'
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(res => console.log("DEMO: adding a post", res))
    .catch(e => console.log("DEMO: Adding a new post doesn't work for the production source, but this is how we would've done it!", e));

fetch('/api/posts/1', {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(post => console.log('DEMO: deleted post', post));

// ----------- CORS demonstration -------------

fetch('http://localhost:8888/api/products')
    .then(response => response.json())
    .then(products => console.log("CORS: Could steal data directly from backend!", products))
    .catch(e => console.log("CORS: Failed to call backend directly :(", e));
