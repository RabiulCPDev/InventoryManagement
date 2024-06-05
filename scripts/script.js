
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
        producId: 2,
        productName: "Google Pixel 7 pro",
        productQuantity:1,
        productPrice: 75000,
        productVendor:"Google",
        productCategory:"SmartPhone"
    },
    {
        producId: 3,
        productName: "Google Pixel 6 pro",
        productQuantity:1,
        productPrice: 55000,
        productVendor:"Google",
        productCategory:"SmartPhone"
    },
];

showData();


document.getElementById("productForm").addEventListener('submit' , myFunction);

function myFunction (event){
    event.preventDefault();
    const formData = {
        productName: document.getElementById("productName").value,
        productQuantity: document.getElementById("productQuantity").value,
        productPrice: document.getElementById("productPrice").value,
        productVendor: document.getElementById("productVendor").value,
        productCategory: document.getElementById("productCategory").value
    }
    data.push(formData);
   showData();   
}




function showData(){
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML=` `;
    data.forEach(element => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML=`
            <td class="py-2 px-4 border-b text-center">${element.productName}</td>
            <td class="py-2 px-4 border-b text-center">${element.productQuantity}</td>
            <td class="py-2 px-4 border-b text-center">${element.productPrice}</td>
            <td class="py-2 px-4 border-b text-center">${element.productVendor}</td>
            <td class="py-2 px-4 border-b text-center">${element.productCategory}</td>
            <td class="py-2 px-4 border-b text-center">
          <button class="bg-green py-1 px-3 text-white rounded hover: bg-green-800" onclick="editProduct('${element.productName}')">edit</button>
          <button class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700" onclick="deleteProduct('${element.productName}')">Delete</button>
          </td>
        `;
        console.log(element);
       
        tableBody.appendChild(tableRow);
    });
    
}




function deleteProduct(productName){
    const index = data.findIndex(product=> product.productName==productName);
   if(index!=-1) data.splice(index,1);
   else console.log("No data found to Delete");
    showData();
}