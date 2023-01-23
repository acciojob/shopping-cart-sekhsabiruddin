//your code here


let add =document.getElementById("add");

add.addEventListener("click", function() {
	/* Your CSS Code here. */
let item = document.getElementById('item').value;
let price =document.getElementById("price").value;
 document.getElementById('total').innerText= item * price;
});
