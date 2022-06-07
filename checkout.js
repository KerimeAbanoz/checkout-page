const taxRate = 0.8;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  //set item to localStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice,", shippingPrice);

  //set item to SessionStorage
  // sessionStorage.setItem("taxRate", taxRate);
  // sessionStorage.setItem("shippingPrice,", shippingPrice);
});

//capturing method
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      //parameter == productInfoDiv
      calculateProductAndCardTotal(event.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted?")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCardTotal();
      }
    }
    // console.log("minus button clicked");
  } else if (event.target.classList == "plus") {
    event.target.previousElementSibling.innerText++;
    //parameter == selected productInfoDiv
    calculateProductAndCardTotal(event.target.parentElement.parentElement);
    // console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCardTotal();

    // console.log("remove button clicked");
  } else {
    console.log("other elements clicked");
  }

  // console.log(event.target);
});

//calculate cart and product totals

const calculateProductAndCardTotal = (ProductInfoDiv) => {};
const calculateCardTotal = () => {};

//calculate cart and product totals
const calculateCardTotal = () => {};
