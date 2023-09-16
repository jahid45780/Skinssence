 // step 1
 document.getElementById('btn-submit').addEventListener('click',function(){
    // step2 set up email
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
    // step3 set up password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    // step4 vrify email and password
    if(email ==='sheikh@suraiya.com'&& password === '12345'){
        window.location.href = 'index1.html' 
       //console.log('valid user')
    }
    else{
       alert('  Sweetheart is using the wrong password Try with correct password');
    }

});