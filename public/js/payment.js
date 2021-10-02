function random(){
    var otp = Math.round( 1000 + Math.random()*8999);
    return  otp;
}

function makepayment(e){
        e.preventDefault();

        var cardNumber = document.getElementById('card').value;
        var date = document.getElementById('date').value;
        var cvv = document.getElementById("pin").value;
        var name = document.getElementById('cardH').value;

        if(cardNumber < 100000000000 || cardNumber >999999999999){
            alert("Invalid Card Number");
        }else if(cvv>999 || cvv<100){
            alert("Invalid CVV ");
        }else if(name.trim() == "" ){
            alert("Enter your name")
        }
        else{
            let otimep = random();
            console.log(otimep);
            let enter = prompt("Enter OTP");
            //console.log(enter);
            if(enter!=null && Number(enter) === otimep){
                setTimeout(function(){
                    alert("Payment Successfull !");
                    window.open("/courses");
                    
                },2000);
            }else{
                alert("Invalid OTP");
            }
        }
    }