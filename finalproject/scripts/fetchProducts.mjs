
export async function displayProductsIndex(){
    const url = "./scripts/data/products.json"
    const response = await fetch(url);

    try{
        if (!response.ok){
            throw new Error(`Error!! Status:${response.status}`);
        }
        const products = await response.json();
        const modalIndex = document.querySelector(".productList");
        products.forEach(products => {
            const p = document.createElement("p");
            p.innerHTML = `${products.name} $${products.price}`;
            modalIndex.appendChild(p);
        });
    } catch(error){
        console.error("Error!")
    }
}

export async function displayProducts(){
    const url = "./scripts/data/products.json"
    const response = await fetch(url);

    try{
        if (!response.ok){
            throw new Error(`Error!! Status:${response.status}`);
        }
        const products = await response.json();
        const prodList = document.querySelector(".products-list-container");
        products.forEach(products => {
            prodList.innerHTML = `
                <div class="products-list-cards">
                    <h1 class="prodH1">${products.name}</h1>
                    <p class="priP">$ ${products.price}</p>
                    <img class="prodImg" src="${products.img}" alt="${products.name} img">
                </div>  
            `;
        });
    } catch(error){
        console.error("Error!")
    }

}