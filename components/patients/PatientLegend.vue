<template>
  <h4>Legenda:</h4>
  <ul class="list-inline">
    <li
      v-for="vaccine in vacUsed"
      :key="vaccine.id"
      class="list-inline-item vac p-2"
      :class="vaccine.replace('&', 'a').toLowerCase().slice(0, 3)"
    >
      {{ vaccine }}
    </li>
  </ul>
  <p><span class="badge bg-danger ms-2">!</span> - pacient je alergický</p>
</template>

<script lang="ts">
export default defineComponent({
  Name: 'PatientLegendInfo',
  async setup() {
    const vacUsed = inject('vacUsed')
    const state = reactive({})

    return {
      ...toRefs(state),
      vacUsed,
    }
  },
})
</script>
