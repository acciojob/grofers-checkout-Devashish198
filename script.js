const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
	let prices = document.querySelectorAll(".price");
	prices.forEach((price) => {
    sum += parseFloat(price.textContent);
		
});
const TotalSum = document.createElement("p");
	TotalSum.append(`Total price is ${sum}`)
	document.body.appendChild(TotalSum);
  
};

getSumBtn.addEventListener("click", getSum);

