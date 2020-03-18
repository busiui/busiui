export class BusiSquareComponent extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        updateStyle(this);
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name:string, oldValue:String, newValue:String) {
        console.log('Custom square element attributes changed.');
        updateStyle(this);
    }
}

customElements.define('custom-square', BusiSquareComponent);

function updateStyle(elem:any) {
    const shadow = elem.shadowRoot;
    shadow.querySelector('style').textContent = `
      div {
        width: ${elem.getAttribute('l')}px;
        height: ${elem.getAttribute('l')}px;
        background-color: ${elem.getAttribute('c')};
      }
    `;
}