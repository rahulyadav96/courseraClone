

let grab_details = JSON.parse(localStorage.getItem("details"))

function loginForm(e) {

    var flag = 0;

    e.preventDefault()

    grab_details.forEach(element => {

        let email = document.getElementById("personEmail").value
        console.log("email:", email)

        let password = document.getElementById("password").value



        if (element.email == email && element.password == password) {

            flag = 1;


        } else {

            if (flag != 1) {

                flag = 2;

            }
        }

    });

    if (flag == 1) {

        document.getElementById("loginSuccess").innerHTML = "*Login successful!"
        document.getElementById("loginSuccess").style.color = "green"

        document.getElementById("continue").style.visibility = "visible";


        clearFields()


    } else if (flag == 2) {

        alert("wrong credentials")

        clearFields()
    }


}

function clearFields() {


    document.getElementById("personEmail").value = ""

    document.getElementById("password").value = ""

}




