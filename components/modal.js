function createModal({ modalName = "d-modal", openBtnName = "Open", closeBtnClass = "close", closeCallback = Function(), openCallback = Function() } = {}) {
  class Modal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
              <style>
                  .dialog {
                      background-color: rgba(0,0,0,0.2);
                      display: none;
                      position: fixed;
                      z-index: 1;
                      padding-top: 100px;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 100%;
                      overflow: auto;
                  }
                  .dialog-content {
                      position: relative;
                      background-color: #fefefe;
                      margin: auto;
                      padding: 0;
                      width: 50%;
                      min-height: 30%;
                      box-shadow: 8px 4px 0px 0px #f7b32b;
                      border: solid 3px #81b6da;
                      padding: 1rem;
                  }
              </style>

              <button>${openBtnName}</button>
              <div class="dialog">
                  <div class="dialog-content">
                      <div class="dialog-header">
                      <span class="dialog-close">X</span>
                      </div>
                      <div class="dialog-body">
                          <slot><slot>
                      </div>
                  </div>
              </div>
          `;
    }

    connectedCallback() {
      this._modal = this.shadowRoot.querySelector(".dialog");
      this.shadowRoot.querySelector("button").addEventListener('click', this._showModal.bind(this));
      this.shadowRoot.querySelector(".dialog-close").addEventListener('click', this._hideModal.bind(this));
      this.querySelectorAll("." + closeBtnClass).forEach(element => {
        element.addEventListener('click', this._hideModal.bind(this))
      });
    };

    disconnectedCallback() {
      this.shadowRoot.querySelector("button").removeEventListener('click', this._showModal);
      this.shadowRoot.querySelector(".dialog-close").removeEventListener('click', this._hideModal);
      this.querySelectorAll("." + closeBtnClass).forEach(element => {
        element.removeEventListener('click', this._hideModal);
      });
    }

    _showModal(event = null) {
      this._modalVisible = true;
      this._modal.style.display = 'block';
      openCallback(event.target);
    }

    _hideModal(event = null) {
      this._modalVisible = false;
      this._modal.style.display = 'none';
      closeCallback(event.target);
    }
  }

  customElements.define(modalName, Modal);
}

export default createModal;