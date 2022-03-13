<template>
  <Navigation
    :dropdown="dropdown"
    v-on:responsive="responsive()"
    v-on:dropdown="dropdown = !dropdown"
  />

  <div class="container-md">
    <NuxtPage />
  </div>
</template>

<script lang="ts">
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
