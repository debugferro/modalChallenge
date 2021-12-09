import createModal from './modal.js';

function firstCloseCallback(element) {
  if (element.getAttribute('id') == 'yes') {
    document.getElementById("first-modal-yes").style.display = "block";
  } else {
    document.getElementById("first-modal-no").style.display = "block";
  }
}

function secondCloseCallback(element) {
  if (element.getAttribute('id') == 'yes') {
    document.getElementById("second-modal-yes").style.display = "block";
  } else {
    document.getElementById("second-modal-no").style.display = "block";
  }
}

function initializeElements() {
    createModal({modalName: "f-modal", openBtnName: "OI", closeBtnClass: "closethis", closeCallback: firstCloseCallback});
    createModal({modalName: "s-modal", openBtnName: "OI", closeBtnClass: "closethis", closeCallback: secondCloseCallback});
}

export default initializeElements;