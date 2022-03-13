<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-md">
      <NuxtLink to="/" class="navbar-brand">Hyperia Hospital</NuxtLink>
      <button class="navbar-toggler" type="button" @click="$emit('dropdown')">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: dropdown }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NuxtLink to="/" class="nav-link" @click="$emit('responsive')"
              >Úvod</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/addview"
              class="nav-link"
              @click="$emit('responsive')"
            >
              Pridaj pacienta</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/patientsview"
              class="nav-link"
              @click="$emit('responsive')"
              >Zoznam pacientov</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/centersview"
              class="nav-link"
              @click="$emit('responsive')"
              >Zoznam vakcinačných centier</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Navigation',
  props: { dropdown: Boolean },
  setup() {
    return {}
  },
})
</script>
