//your code here


let add =document.getElementById("add");
let sum =0;
add.addEventListener("click", function() {
	/* Your CSS Code here. */
let item = document.getElementById('item').value;
let price =document.getElementById("price").value;
	sum+=item * price;
 document.getElementById('total').innerText= sum;
});
