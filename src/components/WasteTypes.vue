<template>
  <section id="waste" class="waste-types">
    <h2 class="section-title">Принимаемые отходы</h2>
    <div class="filters">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Все</button>
      <button @click="filter = 'paper'" :class="{ active: filter === 'paper' }">Макулатура</button>
      <button @click="filter = 'plastic'" :class="{ active: filter === 'plastic' }">Пластик</button>
    </div>
    <table class="waste-table">
      <thead>
        <tr>
          <th>Тип</th>
          <th>Иконка</th>
          <th>Условия приема</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredWaste" :key="item.id">
          <td>{{ item.type }}</td>
          <td>{{ item.icon }}</td>
          <td>{{ item.conditions }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'WasteTypes',
  props: {
    wasteTypes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    filteredWaste() {
      if (this.filter === 'all') return this.wasteTypes;
      return this.wasteTypes.filter(item => item.category === this.filter);
    }
  }
}
</script>

<style scoped>
.waste-types {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.filters {
  margin-bottom: 1rem;
}
.filters button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.filters button.active {
  background: #42b983;
  color: white;
}
.waste-table {
  width: 100%;
  border-collapse: collapse;
}
.waste-table th, .waste-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>