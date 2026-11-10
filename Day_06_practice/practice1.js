let products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 },
    { name: "Headphones", price: 2000 }
];

let newProduct = products.filter(function(product){
     return product.price > 5000
})
let totalSum = newProduct.reduce((total, product)=>{
    return total + product.price
},0)
console.log(totalSum);
