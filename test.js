let productObject = [];
let urlTest = "https://testcheftest.com/.private2/php/product.php?ids=4af5a797-54be-4dbb-aa02-5c18870014bf";
fetchTest(urlTest);

/* The following code, with exception to the last function, is authored by Amanda Venier */
let testPage = document.getElementById("testPage");

// Display product image
let productImage = document.createElement("img");
let productImageUrl = productObject[0].image[0].image; 
productImage.setAttribute("src", productImageUrl);
productImage.setAttribute("id", "productImage");
testPage.appendChild(productImage);

// Display product brand & manufacture
let productBrand = document.createElement("h4");
productBrand.innerHTML = productObject[0].brand + ", By " + productObject[0].manufacture;
productBrand.setAttribute("id", "productBrand");
testPage.appendChild(productBrand);

// Display product name
let productName = document.createElement("p");
productName.innerHTML = productObject[0].name; 
productName.setAttribute("id", "productName");
testPage.appendChild(productName);

// Display product price
let productPrice = document.createElement("p");
productPrice.innerHTML = "$" + Math.round(productObject[0].price * 100) / 100; 
productPrice.setAttribute("id", "productPrice");
testPage.appendChild(productPrice);

function fetchTest(url) {
    try {
      if (!url) {
        console.error('URL is undefined');
        return Promise.reject(new Error('URL is undefined'));
      }
  
      // Return the promise returned by fetch
      return fetch(url, { credentials: 'include' })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          productObject = data;
          
        })
        .catch(error => {
          console.error('Fetch error:', error);
          throw error;
        });
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
 