function makeid(length) {

   var result           = '';

   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

   var charactersLength = characters.length;

   for ( var i = 0; i < length; i++ ) {

      result += characters.charAt(Math.floor(Math.random() * charactersLength));

   }

   return result;

}

var ranEmail = makeid(15)+"@gmail.com";

document.querySelector(".page_hide").style.display="none";

document.querySelector(".custom_select").style.display="none";

document.getElementById("email-input").value = ranEmail;

