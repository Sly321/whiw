class PropertyMissingError extends Error {
	constructor(id, component) {
		super(`missing property "${id}" on element <${component} />!`)
		this.name = PropertyMissingError.name
	}
}

class SeriesCard extends HTMLElement {
	constructor() {
	  super();

	  console.log(this.getAttribute("id"))
	  
	  const shadow = this.attachShadow({ mode: 'open' });
	  const div = document.createElement("div")
	  div.innerHTML = "Hallo"
	  shadow.appendChild(div)
	}
}

customElements.define('series-card', SeriesCard);

class ElementWithProperties extends HTMLElement {
	constructor(...requiredAttributes) {
		super()
		requiredAttributes.forEach(attribute => {
			if (!this.getAttribute(attribute)) {
				throw new PropertyMissingError(attribute, this.localName)
			}
		})
	}
}

class EleTop extends ElementWithProperties {
	constructor() {
		super("id")
		const shadow = this.attachShadow({ mode: 'open' });
		const div = document.createElement("div")
		div.innerHTML = "Hallo"
		shadow.appendChild(div)
	}
}

customElements.define('ele-onetwo', EleTop);
