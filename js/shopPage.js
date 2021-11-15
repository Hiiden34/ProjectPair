//Initialise an instance of the Product Class Object

const phone = new Product();
//this refer to the phone variable declared

//add 6 products to phone instance object

phone.addProduct("", "iPhone X", "Description", "images/samplePhone.jpg", "Phone", "$1000");

phone.addProduct("", "iPhone X", "Description", "images/newTablet.png", "Tablet", "$1000");

phone.addProduct("", "iPhone Tablet", "Description", "images/samplePhone.jpg", "Laptop", "$1000");

phone.addProduct("", "iPhone X", "Description", "images/newTablet.png", "Phone", "$1000");

phone.addProduct("", "iPhone Tablet", "Description", "images/samplePhone.jpg", "Phone", "$1000");

phone.addProduct("", "iPhone X", "Description", "images/newTablet.png", "Tablet", "$1000");

phone.displayProduct();

//if have more than 1 products
//const tablet = new Product(); //- name the const accordingly to be able to call the variable later

//add 3 products to tablet instance object
/*tablet.addProduct("iPhone X", "Description", "images/trial.jpg", "Black", "$1000");

tablet.addProduct("iPhone X", "Description", "images/newTablet.png", "Black", "$1000");

tablet.addProduct("iPhone Tablet", "Description", "images/samplePhone.jpg", "Black", "$1000");


tablet.displayProduct();*/

