function showpassword(){
    var password = document.querySelector("#userp");
    let show = document.getElementById("showpassw");


    if (password.type === "password"){
        password.type = "text";
        show.textContent = "hide";
    }else{
        password.type = "password";
        show.textContent = "show";
    }
}

function validate(event){

    var user = document.querySelector("#usern");
    var pass = document.querySelector("#userp");
    var mes = document.querySelector(".errormes");

     if (user.value.length == 0 && pass.value.length != 0)
      { 
        mes.innerHTML = "Please enter your username."; 
        console.log('Login error.'); 	
      } 
    
      if (user.value.length != 0 && pass.value.length == 0)
      { 
        mes.innerHTML = "Please enter your password.";
        console.log('Login error.');	
      } 
      
      if (user.value.length == 0 && pass.value.length == 0)
      { 
        mes.innerHTML = "Please enter your username and password.";
        console.log('Login error.');  	
      } 

      if (user.value.length != 0 && pass.value.length != 0)
      { 
        mes.innerHTML = ""; 	
        window.location.href = "index.html"
      } 

}
