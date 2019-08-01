function stylings(string, ...keys) {
	const styleElement = document.createElement("style")
	styleElement.textContent = string.join("")
	return styleElement
}

customElements.define('navigation-bar', class extends HTMLElement {
	constructor() {
	  super();

	  const shadow = this.attachShadow({ mode: 'open' })
	  shadow.appendChild(stylings`
	  	nav { 
		  width: 100%; 
		  background: cornflowerblue;
		  height: 50px;
		  padding: 0.5rem;
		  display: flex;
		}

		navigation-widget-container {
			flex: auto;
		}
		
		ul {
			display: flex;
			align-items: center;
			justify-content: center;
			list-style-type: none;
			height: 100%;
			margin: 0;
			padding: 0;
			flex: auto;
		}

		navigation-widget-container:first-child ul {
			justify-content: start;
		}

		navigation-widget-container:last-child ul {
			justify-content: end;
		}

		nav ul li {

		}
		
		* { 
			box-sizing: border-box; 
		}`)

	  if (this.hasAttribute("sticky")) {
		// TODO do sticky stuff
	  }

	  const nav = document.createElement("nav")
	  nav.setAttribute("role", "navigation")
	  nav.setAttribute("aria-label", "Main Menu")

	  nav.innerHTML = this.innerHTML
	  this.innerHTML = ""
	  
	  shadow.appendChild(nav)
	}
})

customElements.define('navigation-widget-container', class extends HTMLElement {
	constructor() {
	  super();

	  const ul = document.createElement("ul")
	  ul.innerHTML = this.innerHTML
	  this.innerHTML = ""
	  this.appendChild(ul)
	}
})