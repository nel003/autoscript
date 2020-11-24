var pageHide03 = document.querySelector(".page_hide");
var customSelect03 = document.querySelectorAll("iframe");
var body03 = document.querySelector("body");
var email03 = document.getElementById("email-input");
var ranEmail = makeid(15) + "@gmail.com";

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function hideReasonBox() {
  customSelect03.forEach(i => {
    i.style.display = "none";
  })
  pageHide03.style.display = "none";
  body03.style.height = "100vh";
  email03.value = ranEmail;
}
