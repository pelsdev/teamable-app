function handleEditProfile() {
     document.getElementById("name-input").value = document.getElementById("name").textContent
    
     document.getElementById("email-input").value= document.getElementById("email").textContent
    
     document.getElementById("interest-input").value= document.getElementById("interest").textContent
    
    document.getElementById("edit-profile").style.display="block"
    
    document.getElementById("main").style.display="none"

}
function handleUpdateProfile() {
    document.getElementById("main").style.display="block"
    document.getElementById("edit-profile").style.display="none"
    const name = document.getElementById("name-input").value
    const email = document.getElementById("email-input").value
    if (validator.isEmail(email)){
         document.getElementById("email").textContent = email

    } else{
        alert("Wrong email formart")
    }
    const interest = document.getElementById("interest-input").value
    document.getElementById("name").textContent = name
   
    document.getElementById("interest").textContent = interest
}


