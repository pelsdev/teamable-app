<template>
    <div v-show="!isEditMode" >
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
    <div v-show="isEditMode" >
      <header>
        <h1>User Profile</h1>
      </header>
      <img :src="image" alt="dog" />
      <div class="user">
        <p class="field">
          Name: <input id="name-input" type="text" v-model="name" />
        </p>
        <p class="field">
          Email:
          <input id="email-input" type="text" v-model="email" />
        </p>
        <p class="field">
          Interest:
          <input id="interest-input" type="text" v-model="interest" />
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
            name: "",
            email: "",
            interest: "",
            isEditMode: false
            
          }
        },
       async created(){
       const userData = await this.fetchUserProfile()
        this.name = userData.name
        this.email = userData.email
        this.interest = userData.interest
        },
        methods: {
          handleEditProfile() {
            this.isEditMode = true
   
},
        async  handleUpdateProfile() {
            const payload = {
              name: this.name,
              email: this.email,
              interest: this.interest
            }
           const resJson = await this.updateUserProfile(payload)
           console.log(resJson)

            this.isEditMode = false
},
      async  fetchUserProfile(){
      const res = await fetch('get-profile')
      return await res.json()
        },
        async updateUserProfile(payload){
         const res = await fetch('update-profile', {
            method: "POST",
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          return await res.json()
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

</style>