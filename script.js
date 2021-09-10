
//burger menu
function myFunction() {
  var x = document.getElementById("sub-menu");
  
  if (x.style.display === "flex") {
    x.style.display = "none";

  } else {
    x.style.display = "flex"
  
    
    //x.style.flexDirection="column";
  }
}

//add other input
var style = getComputedStyle(document.body)

function addOtherInput(element) {
  let text = element.options[element.selectedIndex].text;
  let otherInput = document.getElementById('other')
  let otherInputLabel = document.getElementById('other-label')
 console.log(text)
 if(text==='სხვა'){
  otherInput.style.opacity = 1
  otherInputLabel.style.opacity = 1
  document.documentElement.style.setProperty('--plusTop', '110px');
  //style.setProperty('--plusTop', '50px');
 }
 else{
  otherInput.style.opacity = 0
  otherInputLabel.style.opacity = 0
  document.documentElement.style.setProperty('--plusTop', '0px');
 }
}

//show/hide password

const showHidePass = () => {

var pass = document.getElementById("user-password");
let passEye = document.getElementById("pass-eye");
  if (pass.type === "password") {
    pass.type = "text";
    passEye.src = "assets/Group 768.svg";
  } else {
    pass.type = "password";
    passEye.src = "assets/Icon feather-eye.svg";
  }
}
const showHidePassRepeat = () => {

  var pass = document.getElementById("user-password-repeat");
  let passEye = document.getElementById("pass-eye-repeat");
    if (pass.type === "text") {
      pass.type = "password";
      passEye.src = "assets/Icon feather-eye.svg";
      
    } else {
      pass.type = "text";
      passEye.src = "assets/Group 768.svg";
    }
  }
//pass-input-validation
  const passChange = () => {
    let pass = document.getElementById("user-password").value;
    let message = document.getElementById('warning-message-pass')
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/
  
    if(pass.length === 0 ){
     message.innerHTML = 'პაროლი უნდა შეიცავდეს 6 სიმბოლოს, ერთს დიდ და ერთს პატარა სიმბოლოს, რიცხვს'
     console.log(pass.length)
    }else if(pass.length > 0 && !regex.test(pass)){
      message.innerHTML = 'პაროლი უნდა შეიცავდეს 6 სიმბოლოს, ერთს დიდ და ერთს პატარა სიმბოლოს, რიცხვს'
      }
    else{
      message.innerHTML = ''
    }
  }

 //form-validation && pop-up
 const nameValidation = (event) =>{
  event.preventDefault();
   let inputColor = document.getElementById("user-name-label")
   let inputBorderColor = document.getElementById("user-name")
   let name = document.getElementById('user-name').value
   let surName = document.getElementById('user-surname').value
   let region = document.getElementById('region')
   let inputPosition = document.getElementById('input-position')
   let email = document.getElementById('email').value
   let message = document.getElementById('warning-message-user')
   let allInputs = ['region', 'input-position', 'email', 'user-name', 'user-surname', 'user-password', 'user-password-repeat']
   let warning = document.getElementById('warning')
   console.log(name)
   var xValues  
//inputsvalidation
   allInputs.some(item => {
    if(document.getElementById(item).value.length < 1 ){
      document.getElementById(item).style.borderColor = "#E74C3C";
      document.querySelector("label[for=" + item + "]").style.color = "#E74C3C";
     console.log(true)
     xValues = true
    }
  })
   if(xValues){
     return warning.innerHTML = 'გთხოვთ შეავსოთ ყველა ველი'
   }
   
//name validation
   if(name !== 'jaba' && name.length !==0 ){
    message.innerHTML = 'შეყვანილი სახელი დაკავებულია'
    
    inputColor.style.color = "#E74C3C";
    inputBorderColor.style.borderColor = "#E74C3C";
    document.getElementById('user-name').value = ''
    document.getElementById('pop-up').style.display = 'none'
   }
 //pop up

 document.getElementById('pop-up').style.display = 'block'
 const popUpDiv =  document.getElementById('pop-up')



 popUpDiv.innerHTML = `
 <div class = 'pop-up-content'>
 <div id ='pop-up-button' onclick='closePopUp()'><img  id ='pop-up-x' src='assets/Icon metro-cancel.svg' ></div>
 <h1 id='pop-up-header'>რეგისტრაცია</h1>
 <div id = 'pop-up-container'>
 
 <p id = 'pop-up-name'> სახელი: </p>
 <p id='pop-up-name2'>${name}</p>
 <p id = 'pop-up-surname' > გვარი: </p>
 <p id='pop-up-surname2'>${surName}</p>
 <p id = 'pop-up-region' > რეგიონი: </p>
 <p id='pop-up-region2'>${region.options[region.selectedIndex].text}</p>
 <p id = 'pop-up-position'> პოზიცია: </p>
 <p id='pop-up-position2'>${inputPosition.options[inputPosition.selectedIndex].text}</p>
 <p id = 'pop-up-email'> ელ.ფოსტა: </p>
 <p id='pop-up-email2'>${email}</p>
 
 </div>
 </div>
 `
 //const newDiv = document.createElement("p")
 //newDiv.innerHTML = 'სახელი'
 //popUpDiv.appendChild(newDiv)
 } 

 //hide pop-up
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


 const closePopUp = () =>{
  document.getElementById('pop-up').style.display = 'none'
 
 }

//hide nav-bar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && prevScrollpos < 50) {
    document.getElementById("nav-bar").style.opacity = 1;
    console.log(prevScrollpos)
  } else {
    document.getElementById("nav-bar").style.opacity = 0;
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("load", () => {
  if(prevScrollpos > 50){
    document.getElementById("nav-bar").style.opacity = 0;
  }
})


//pop-up

const onSubmit = (e) => {


}


