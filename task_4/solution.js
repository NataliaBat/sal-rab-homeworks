// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data;
    data = JSON.parse(json);
    
    let products;
    products = data.products;
   
    return products;
}

function renderProductsCards(json) {
    clearProducts();
    let products;
    products = parseProducts(json);
    lenght = products.lenght;

    for (let i = 1; i < length; i += 1) {
        addProduct(products[i]);
    }

}
