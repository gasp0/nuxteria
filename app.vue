<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-md">
      <a class="navbar-brand" href="#">Hyperia Hospital</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="dropdown = !dropdown"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: dropdown }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NuxtLink to="/" class="nav-link" @click="responsive"
              >Úvod</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/AddView" class="nav-link" @click="responsive">
              Pridaj pacienta</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/PatientsView" class="nav-link" @click="responsive"
              >Patients</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/CentersView" class="nav-link" @click="responsive"
              >Centers</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-md">
    <NuxtPage />
  </div>
</template>

<script lang="ts">
// import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    const state = reactive({
      dropdown: false,
    })

    // HIDE NAV BAR AFTERCLICK
    const responsive = () => {
      window.innerWidth > 767
        ? (state.dropdown = true)
        : (state.dropdown = false)
    }
    // Just to have reactive navbar
    onMounted(() => {
      window.addEventListener('resize', responsive)
    })

    return {
      ...toRefs(state),
      responsive,
    }
  },
})

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5IRa4RfO6e6JW94sJA1Lf0RMQRLKyTro',
  authDomain: 'hyperiassr.firebaseapp.com',
  databaseURL: 'https://hyperiassr-default-rtdb.firebaseio.com',
  projectId: 'hyperiassr',
  storageBucket: 'hyperiassr.appspot.com',
  messagingSenderId: '1012961282089',
  appId: '1:1012961282089:web:ec1bd49363437df9867438',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
</script>
