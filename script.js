const tendingProductsWrapper = document.getElementById("tending-products-wrapper");
const detailsModal = document.getElementById("details_modal");

const loadAllProducts = () => {

  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
        const trending = data.slice(0, 4);
        displayTrendingProducts(trending);
    });
};

const displayTrendingProducts = (products) => {
  tendingProductsWrapper.innerHTML = "";

  products.forEach((product) => {
    tendingProductsWrapper.innerHTML += `
            <div class="bg-base-100 shadow-sm card flex flex-col">
                <figure class="bg-slate-100 p-4 h-70">
                    <img class="w-full h-full object-contain"
                        src="${product.image}"
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="justify-between mb-3 card-actions">
                        <div class="badge bg-sky-100 rounded-full">${product.category}</div>
                        <div class="">⭐ ${product.rating.rate} (${product.rating.count})</div>
                    </div>
                    <h2 class="card-title">
                        ${product.title}
                    </h2>
                    <h2 class="font-bold text-lg">$${product.price}</h2>
                    <div class="flex justify-between gap-3 mt-auto">
                        <button onclick="showProductDetails(${product.id})" class="flex-1 rounded-xl btn-outline btn btn-primary"><i
                                class="fa-regular fa-eye"></i> Details</button>
                        <button class="flex-1 rounded-xl btn hover:bg-white hover:text-primary btn-primary"><i
                                class="fa-solid fa-cart-shopping"></i> Add</button>
                    </div>
                </div>
            </div>
        `;
  });
};

const showProductDetails = (id) => {
  detailsModal.showModal();

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      detailsModal.innerHTML = `
        <div class="modal-box max-w-3xl">
            <div class="flex flex-col md:flex-row gap-6">
                <div class="flex-1 bg-slate-100 p-6 rounded-xl">
                    <img src="${data.image}" class="w-full h-64 object-contain" />
                </div>
                <div class="flex-1 flex flex-col">
                    <div class="mb-3">
                        <span class="badge bg-sky-100 rounded-full">${data.category}</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-2">${data.title}</h2>
                    <div class="mb-2 text-sm text-gray-500">⭐ ${data.rating.rate} (${data.rating.count} reviews)</div>
                    <h3 class="text-xl font-semibold text-primary mb-4">$${data.price}</h3>
                    <p class="text-gray-600 mb-6">${data.description}</p>
                    <div class="mt-auto flex gap-3">
                        <button class="flex-1 btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Add to
                            Cart</button>
                        <form method="dialog" class="flex-1"><button class="w-full btn btn-outline">Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>       
      `;
    });
};

loadAllProducts();