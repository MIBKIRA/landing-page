/************** Please read all the comments in the project because it is very important and thank you  *********************/
/**
 * declaring Global variables
 * secs = sections
 * 
*/

const secs=document.getElementsByTagName('section');
const selectID=document.getElementById('navbar__list');
const fragment=document.createDocumentFragment();
let sections = document.querySelectorAll("section");
/**
 * End declaring Global Variables
 * Start Functions
 *
*/

// creating navigation bar list items

// After I changed the function that was responsible for creating the navigation bar to this function
// I changed some things in the css file, to be able to show the navigation bar
// I will add a "^^" tag to it to distinguish it in the css file so that you can know it
function createNavigation(){
	// looping for all 4 sections
	for (let i=0;i<secs.length;i++){
	/** There were many problems while trying to run scrollIntoView
	 * But I came up with a very good idea, which is to put a link (<a>) inside each list item (<li>)
	 * To make it easier for me to link the navigation bar and sections
	 * And I have put inside each link ( data-link and class )
	 * We'll see how I use it later
	 * give a (href#) to the list item (<li>) To be able to add and remove the menu_link class 
	*/
	selectID.innerHTML+=`<li  href="#section${i+1}" class="menu__link" ><a data-link=section${i+1} class="scroll-to">${secs[i].getAttribute('data-nav')}</a></li>`;
    }
}

	// build the nav
	//I moved createNavigation(); here to display the navigation bar immediately after creating it
	// so that I can turn on the scrollIntoView feature
createNavigation();

// Scroll to section on link click
//We collect all elements that is have the same class 
const links = document.querySelectorAll(".scroll-to");
//console.log it To make sure everything is OK
console.log(links);
// set name of event "item" and use Arrow function
links.forEach((item)=>{
	// console.log(item)
	// item.preventDefault();
	//when we click on the navbar item (<a>) This is what will happen
	item.addEventListener("click",(e)=>{
		//First, we remove the natural structure of the link using e.preventDefault();
		e.preventDefault();
		//Now it's time to use (data-link , class ) , which we gave to all the elements of the navbar
		//Then we take the id for each element that has (data-link)
		const el = document.getElementById(item.getAttribute("data-link"));
		//And finally, we usescrollIntoView To make the scrolling more smooth
		el.scrollIntoView({behavior:"smooth",block:"start"});
	});
	
});



// checking if element in viewport or not

onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;

	sections.forEach((section) => {
    //I USED (section.offsetTop - section.offsetHeight * 0.25) TO LET THE ACTIVE CLASS APPLY TO THE SECTION smoothly
	// And so that the browser does not have to wait for the section to appear completely to apply the (your-active-class)
		if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) 	{
    let currentId = section.attributes.id.value;
    removeAllActiveClasses();
    addActiveClass(currentId);
        }
    });
};

//remove the avtive class & menu__link class from all sections & navbar
let removeAllActiveClasses = function () {
    document.querySelectorAll("section").forEach((el) => {
		//remove the avtive class from all sections 
		document.querySelector('.your-active-class')?. classList.remove('your-active-class');
		//remove the avtive class "menu__link class" from all navbar list item
		document.querySelector('.menu__link')?. classList.remove('menu__link');
	});
};
// then calling the active class to apply it to the section by the sectios's id that the viewer in looking at 
let addActiveClass = function (id) {
	//  you can see in the browser's console that the console is printing 
	//  the id of the section that you looking at right now 
	// and It changes depending on which piece you are looking at now
	console.log(id);
	//now we adding the active class to The section that is currently displayed to the user
	document.querySelector(`#${id}`).classList.add('your-active-class');
	//And here another active class is added but this time it will be for the navigation bar element that is currently displayed to the user
	//I changed some things in the css file, to be able to make everything working fine
	// I will add a "%%%%" tag to it to distinguish it in the css file so that you can know it
	document.querySelector(`[href="#${id}"]`).classList.add('menu__link');
	
	
};

/**
 * End Functions
 * start Main Functions
 *
*/

window.addEventListener('DOMContentLoaded', function(){
	// Add class 'active' to section when near top of viewport
	document.addEventListener('scroll',onscroll);
	
})

/**
 * End Main Functions
 *
*/
