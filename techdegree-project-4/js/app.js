//search photos

const input = document.getElementById("search");
const caption = document.querySelectorAll("a[data-caption]");

input.addEventListener("keyup", function(event) {
	let searchResult = input.value.toUpperCase();
	
	for (i = 0; i < caption.length; i++) {
		const photoList = document.getElementsByTagName("a");
		if (searchResult.includes(caption)) {
		    photoList.style.display = '';			
		} else {
			photoList.style.display = 'none';
			
		}		
	}	
})




