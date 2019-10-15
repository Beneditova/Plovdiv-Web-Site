
function validateForm(){
			var username = document.getElementById("uname");
			var famname = document.getElementById("fam");
			var message = document.getElementById("msg");
			var email = document.getElementById("email");
			var password = document.getElementById("password")
			var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

			var re = /^\w+$/;
            if(!re.test(form.username.value)) {
              alert("Username must contain only letters, numbers and underscores!");
              form.username.focus();
              return false;
            }
             
            re = /[0-9]/;
          
            if(!re.test(form.password.value)) {
      		    alert("Password must contain at least one number (0-9)!");
      		    form.password.focus();
       			 return false;
     			  }

            re = /[a-z]/;
            
            if(!re.test(form.password.value)) {
       		    alert("Password must contain at least one lowercase letter (a-z)!");
       		    form.password.focus();
        	    return false;
            }
              
            re = /[A-Z]/;
           
            if(!re.test(form.pwd1.value)) {
              alert("Error: password must contain at least one uppercase letter (A-Z)!");
              form.password.focus();
              return false;
            }
			
            if (username.value.trim()=="" || famname.value.trim()=="") {
		    	   	alert("2те имена са празни!.");
			       	form.famname.focus();
		      		return false;
			     }else{
				          true;
			          }
			      
            if (password.value.trim()=="") {
				      alert("Password is empty.");
			      	return false;
			      }	else{
			            	true;
		            	}
			      if(message.length<30){
                 var username = document.getElementById("numloc").innerHTML=" е твърде дълго";
                 return false;
                }
             if(name.length<4){
                 var username = document.getElementById("nameSize").innerHTML=" е твърде късо";
                 return false;
                }

                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {

                }
                else{
                	alert("wrong email.")
                	return false;
                }
                if (strongRegex.test(form.password.value)){

                }
                else{
                	alert("Password doesnt have the right values!")
                	return false;
                }
}
