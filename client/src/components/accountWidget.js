function stylings(string, ...keys) {
	const styleElement = document.createElement("style")
	styleElement.textContent = string.join("")
	return styleElement
}

customElements.define('account-widget', class extends HTMLElement {
	constructor() {
	  super();

	  const li = document.createElement("li")
	  li.innerHTML = "😱"
	  this.appendChild(li)
	}
})