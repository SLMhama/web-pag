
const nameinput= document.querySelector("#name");
const email= document.querySelector("#email");
const message= document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorall("#error");





function validateform()

clearMessage();
let erorflag = false;

    if (nameinput.value.length < 1 ){
        errorNodes[0].inputtext = "name connot be blank";
        nameinput.classList.add("error-border");
        erorflag = true;
      

    }
    if(!emailIsValid(email.value)){
   errorNodes[1].innertext = "invalid email address";
  email.classList.add("error-border");

   if(message.value.length < 1){
    errorNodes[2].innertext = "please enter massage";
    message.classList.add("error-border");
    erorflag = true;
   }
   if(!erorflag){
       success.innertext="success!";
   }

}

//clear eror /success message
function clearMessage(){
    for(let i=0; i< errornodes.length();i++){
        errorNodes[i].innertext="";
    }
    success.innertext="";
    nameinput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

    }
    function emailIsValid(email){
        let pattern = /\s+@\s+\.\+/;
        return pattern.test (email)
    }
