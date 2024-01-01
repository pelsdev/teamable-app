function handleEditProfile() {
    document.getElementById("edit-profile").style.display="block"
    document.getElementById("main").style.display="none"

}
function handleUpdateProfile() {
    document.getElementById("main").style.display="block"
    document.getElementById("edit-profile").style.display="none"
    const name = document.getElementById("name-input").value
    const email = document.getElementById("email-input").value
    const interest = document.getElementById("interest-input").value
    document.getElementById("name").innerText = name
    document.getElementById("email").innerText = email
    document.getElementById("interest").innerText = interest



}


