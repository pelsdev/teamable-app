<template>
    <div id="main">
      <header>
        <h1>User Profile</h1>
      </header>
      <img :src="image" alt="dog" />
      <div class="user">
        <p class="field">Name: <b id="name">{{ name }}</b></p>
        <p class="field">Email: <b id="email">{{ email }}</b></p>
        <p class="field">Interest: <b id="interest">{{ interest }}</b></p>  
      </div>
      <button @click="handleEditProfile">Edit Profile</button>
    </div>
    <div id="edit-profile">
      <header>
        <h1>User Profile</h1>
      </header>
      <img :src="image" alt="dog" />
      <div class="user">
        <p class="field">
          Name: <input id="name-input" type="text" :placeholder="name" />
        </p>
        <p class="field">
          Email:
          <input id="email-input" type="text" :placeholder="email" />
        </p>
        <p class="field">
          Interest:
          <input id="interest-input" type="text" :placeholder="interest" />
        </p>
      </div>
      <button @click="handleUpdateProfile">Update Profile</button>
    </div>

</template>

<script>
import image from "./profile.jpeg"
    export default {
        name: "App",
        data() {
          return {
            image: image,
            name: "Amiah Scott",
            email: "amiah@gmail.com",
            interest: "Zoology"
          }
        },
        methods: {
          handleEditProfile() {
     document.getElementById("name-input").value = document.getElementById("name").textContent
    
     document.getElementById("email-input").value= document.getElementById("email").textContent
    
     document.getElementById("interest-input").value= document.getElementById("interest").textContent
    
     
    document.getElementById("edit-profile").style.display="block"
    
    document.getElementById("main").style.display="none"

},
handleUpdateProfile() {
    document.getElementById("main").style.display="block"
    document.getElementById("edit-profile").style.display="none"
    const name = document.getElementById("name-input").value
    const email = document.getElementById("email-input").value
    
    const interest = document.getElementById("interest-input").value
    document.getElementById("name").textContent = name
    document.getElementById("email").textContent = email
    document.getElementById("interest").textContent = interest
}
        }
    }
</script>

<style>
    body {
    margin: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img {
    width: auto;
    height: 300px;

}
.field {
border-bottom: 1px solid black;
width: 450px;
padding:  25px 0px;
}
button {
    width: 7rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: black;
    color: aliceblue;
}
button:hover {
    background-color: #a7d2f9;
    color: black;
}
input{
    width: 200px;
    font-size: 15px;
    padding: 10px;
}
#edit-profile {
    display: none;
}
</style>