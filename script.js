const form = document.querySelector('form');
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")


function sendEmail(){
    
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nikegate@gmail.com",
        Password : "8552F3AEA88A8A9C79D17F90508604C15368",
        To : 'nikegate@gmail.com',
        From : "nikegate@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInput() {
    const items = document.querySelectorAll(".form-control");

    for (const formControl of items) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-txt";

        formControl.parentElement.appendChild(errorElement);

        formControl.addEventListener("keyup", () => {
            if (formControl.value.trim() !== "") {
                formControl.classList.remove("error");
                errorElement.textContent = "";
            } else {
                formControl.classList.add("error");
                errorElement.textContent = "Field can't be blank";
            }
        });
    }
}




