//search photos
const input = document.getElementById('search');
const container = document.querySelector('#container');
const imgLinks = container.querySelectorAll('a');

input.addEventListener("keyup", () => {
	
	// Visitor types keyword in the search box
    let searchResult = input.value.toLowerCase();
	
    for (let i = 0; i < imgLinks.length; i++) {
		let caption = imgLinks[i].getAttribute('data-caption');
		if (caption.includes(searchResult)) {
			imgLinks[i].style.display = '';
		} else {
			imgLinks[i].style.display = 'none';
		}
	}
});