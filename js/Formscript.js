const productForm = [];

function completeForm(){
    alert("Complete");

    const productname = document.querySelector("#productname").value;
    const categories = document.querySelector("#categories").value;
    const price = document.querySelector("#price").value;
    const description = document.querySelector("#description").value;
    const avatar = document.querySelector("#avatar").value;

    const productDetails =
    {
        productname: productname,
        catergories: categories,
        price: price,
        description: description,
        avatar: avatar
    }
    productForm.push(productDetails);

    console.log(productForm);

    alert("Product Submitted!");

}
