function perchase(e){
    e.preventDefault();


    let pay = document.getElementById("with-certicate").checked;
    let free = document.getElementById("without-certicate").checked;

    if(pay){
      window.open("../../makePayment");
    }else if(free){

        setTimeout(function(){
            alert("Congratulations! You are successfully Enrolled for free Course.");
        },2000);

    }
  
}