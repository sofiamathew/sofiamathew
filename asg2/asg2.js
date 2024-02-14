
let image1name = "newyork.jpg";
let image2name = "london.jpg";


function change() {
	const element= document.getElementById("progress");
	if (element.className=="styleschangebefore")
		element.className='styleschangeafter';
	else
		element.className='styleschangebefore';

}


function swap() {
	let p1 = document.getElementById("square1");
	let p2 = document.getElementById("square2");

	let textHtml1 = p1.textContent;
	let textHtml2 = p2.textContent;
	p1.textContent = textHtml2;
	p2.textContent = textHtml1;
}


function flip() {
	let img1 = document.getElementById("img1");
	let img2 = document.getElementById("img2");

	img1.src = image2name;
	img2.src = image1name;

	tempname = image1name;
	image1name = image2name;
	image2name = tempname;
}