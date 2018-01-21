var formInfo = document.getElementById("contact-form").elements;

function logInfo() {
  for (var i = 0; i < formInfo.length; i++) {
    console.log(formInfo[i].value);
  }
}
