// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let  = JSON.parse(json);
    
    let products = data.products;
   
    return products;
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    length = products.length;

    for (let i = 1; i < length; i += 1) {
        addProduct(products[i]);
    }

}
