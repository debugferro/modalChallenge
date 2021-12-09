# 🗂 Documentation

## createModal(options)

### options

📍 Options are the modal characteristics and configuration attributes.

| Option        | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| modalName     | HTML modal name. The name must have a hyphen accordingly with MDN Web Docs. |
| openBtnName   | Open button label text.                                                     |
| closeBtnClass | The close button CSS class.                                                 |
| closeCallback | On modal close callback function.                                           |
| openCallback  | On modal open callback function.                                            |

📋 Example:

<h5>index.js</h5>

```javascript
  createModal({modalName: "f-modal", openBtnName: "Check", closeBtnClass: "modal-close", closeCallback: closeCallback, openCallback: openCallback});
```

<h5>index.html</h5>

```html
  <f-modal>
    <p>Do you want some soda?</p>
    <button class="modal-close" id="yes">Yes</button>
    <button class="modal-open" id="no">No</button>
  </f-modal>
```

### Usage notes

📍 Open/Close callback

Open callbacks will be called when the user clicks the button to open the modal. <br>
Close callbacks will be called when use user click the button to close the modal. <br>
Both callbacks receive the HTML element as a parameter. This way, your code can know what decision the user took.

📋 Example:

```javascript
function closeCallback(element) {
  if (element.getAttribute('id') == 'yes-btn') {
    console.log("The user agreed");
  } else {
    console.log("The user hasn't agreed");
  }
}
``` 

