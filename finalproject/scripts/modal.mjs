
const modal = document.getElementById("productModal");
const modalBtn = document.getElementById("cardProdBtn");
export function displayModal(){
    modal.innerHTML = `
        <div class="closeModalBtn-container">
            <button id="closeModalBtn">X</button>
        </div>
        <div class="modal-opened">
            <h1>a brief list of our products</h1>
            <div class="productList">
                
            </div>
        </div>
    `;

    modalBtn.addEventListener("click", () => {
        modal.showModal();
    });

    const modalCloseBtn = document.getElementById("closeModalBtn");
    modalCloseBtn.addEventListener("click", () => {
        modal.close();
    });
};

