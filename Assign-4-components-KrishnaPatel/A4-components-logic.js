//ASSIGNMENT 4 WEB COMPONENTS
//LOGIC FILE
//IN THIS FILE YOU WILL SIMPLY GRAB YOUR CUSTOM ELEMENT AND ATTACH YOUR METHOD FROM YOUR MODULE TO IT.
window.onload=function(){

	class HumberClock extends HTMLElement {
	constructor() { //CREATE THE CONSTRUCTOR
	super();//CALL CONSTRUCTOR OF HTMLElement class

	let template = document.getElementById("humberClock");
	let templateContent = template.content;

	//CREATE & ATTACH TO SHADOW DOM
	const shadowRoot = this.attachShadow({mode:'open'}).appendChild(
	templateContent.cloneNode(true));
		}
	}

	customElements.define('humber-clock', HumberClock);

	var tikingClock = document.getElementById('time-widget');
	
	clockNs.start();
	
	
}