document.getElementById("productForm").addEventListener('submit' , myFunction);
const data =[
    {
        producId: 1,
        productName: "Asus Vivobook s15",
        productQuantity:1,
        productPrice: 70000,
        productVendor:"Asus",
        productCategory:"Laptop"

    },
    {
        producId: 1,
        productName: "Google Pixel 7 pro",
        productQuantity:1,
        productPrice: 75000,
        productVendor:"Google",
        productCategory:"SmartPhone"
    },
    {
        producId: 1,
        productName: "Google Pixel 6 pro",
        productQuantity:1,
        productPrice: 55000,
        productVendor:"Google",
        productCategory:"SmartPhone"
    },
];
function myFunction (event){
    event.preventDefault();
    const FormData = {
        productName: document.getElementById("productName").value,
        productQuantity: document.getElementById("productQuantity").value,
        productPrice: document.getElementById("productPrice").value,
        productVendor: document.getElementById("productVendor").value,
        productCategory: document.getElementById("productCategory").value
    }
    console.log("Hello",FormData);   
}

const tableBody = document.getElementById("productTableBody");


data.forEach(element => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML(`
        <td>{element.productName}</td>
        <td>{element.productQuantity}</td>
        <td>{element.productPrice}</td>
        <td>{element.productVendor}</td>
        <td>{element.productCategory}</td>
    `)
});
