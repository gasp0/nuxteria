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
            <NuxtLink to="/addview" class="nav-link" @click="responsive">
              Pridaj pacienta</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/patientsview" class="nav-link" @click="responsive"
              >Patients</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/centersview" class="nav-link" @click="responsive"
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
</script>
