
class Product {

    constructor() {
        this.productItems = [];


    }
    //method - adding product into array
    addProduct(name, description, image, style, price) {

        const item = {
            name: name,
            description: description,
            image: image,
            style: style,
            price: price
        }

        this.productItems.push(item);
        //console.log(this.productItems);
    }//End of Add Product method

    displayProduct() {

        let htmlElement = "";
        let index = 0;
        //forEach or for loop - loop through product item array to get individual value to be displayed

        this.productItems.forEach(item => {
            //console.log(item);
            htmlElement += createHTMLElements(item, index);
            index++;

        });

        console.log(htmlElement);
        document.querySelector("#row").innerHTML = htmlElement;

        index = 0;
        this.productItems.forEach(item => {
            document.getElementById(index).addEventListener("click",
                function () { displayProductDetails(item); });

            index++;
        });

    }// end of displayProduct






} //End of Product Class

//use backtick to create HTML ellements in JS
const createHTMLElements = (item, index) =>
    `
    <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a id="${index}" href="#" class="btn btn-primary" data-toggle="modal"
                    data-target="#productModal">More</a>
            </div>
        </div>
    </div>


`

const displayProductDetails = (item) => {
    document.querySelector("#modalName").innerText = item.name;

    document.querySelector("#modalStyle").innerText = item.style;

    document.querySelector("#modalPrice").innerText = item.price;

    document.querySelector("#modalImg").src = item.image;
}
