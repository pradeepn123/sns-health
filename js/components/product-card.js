class ProductCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById(
          "product-card-template",
        ).content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.cloneNode(true));
      }
 }

 export default ProductCard;