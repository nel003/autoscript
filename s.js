var pageHide03 = document.querySelector(".page_hide");

var body03 = document.querySelector("body");

var email03 = document.getElementById("email-input");

var ranEmail = makeid(15) + "@gmail.com";

var target = document.querySelector('.selected-reason-text');

var observer = new MutationObserver(function(mutations) {

  mutations.forEach(function(mutation) {

    hideReasonBox()

  });

});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(target, config);

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

  document.querySelectorAll("iframe").forEach(i => {

    i.style.display = "none";

  })

  pageHide03.style.display = "none";

  body03.style.height = "100vh";

  email03.value = ranEmail;

}

