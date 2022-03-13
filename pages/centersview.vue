<template>
  <div class="about">
    <h1 class="ms-0 m-3">Vakcinačné centrá</h1>
    <div class="row">
      <div class="col-sm-4">
        <label for="vacCentre" class="form-label">Zoradiť podľa</label>

        <select id="vacCentre" class="form-select" v-model="sortOrder">
          <option value="vaccination_centre" selected>Názvu centra</option>
          <option value="available_doctors">Dostupných doktorov</option>
          <option value="vaccinations_count">Zaočkovaných pacientov</option>
        </select>
      </div>

      <div class="col-sm-8 p-3">
        <TransitionGroup name="list" tag="div" class="accordion">
          <ListCenters
            v-for="center in filteredCenters"
            :key="center.id"
            :city="center.vaccination_centre"
            :cId="center.id"
            :doctors="center.available_doctors"
            :count="center.vaccinations_count"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue'
import fetchCenters from '@/composables/fetchCenters'
import Center from '@/types/center'
import CenterOrder from '@/types/centerOrder'
import ListCenters from '@/components/ListCenters.vue'

export default defineComponent({
  name: 'CenterList',
  path: '/centers',
  components: {
    ListCenters,
  },
  async setup() {
    const state = reactive({
      clicked: false,
      current: null,
      centers: [] as Center[],
      loading: true,
      sortOrder: 'vaccination_centre' as CenterOrder,
    })
    useMeta({
      title: 'Hyperia Hospital - zoznam očkovacích centrier',
      meta: [
        {
          name: 'description',
          content:
            'Zoznam centier, najjednoduchšia podstránka, tu som testoval všetky procesy kým som sa pustil do tých zložitejších',
        },
      ],
    })
    // TO ANY MA MRZI ZIAL NEVEDEL SOM CO S NIM :(
    const [{ data: centers }] = await Promise.all([fetchCenters()])

    state.centers = (await centers.value) as any

    const filteredCenters = computed(() => {
      return [...state.centers].sort((a: Center, b: Center) => {
        return a[state.sortOrder] > b[state.sortOrder] ? 1 : -1
      })
    })

    return {
      ...toRefs(state),
      filteredCenters,
    }
  },
})
</script>

<style scoped>
.moving {
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}
</style>
