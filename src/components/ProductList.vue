<template>
  <div class="product-list">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import {getAllProducts} from '../services/ProductService.js'

export default {
  data() {
    return {
      columns: null,
      products: null,
    };
  },
  created() {
    this.columns = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "description", header: "Description" }
    ];
  },
  async mounted() {
    try {
      const response = await getAllProducts();
      let data = response.data;
      this.products = data.data;
    } catch {
      console.log("Error");
    }
  },
};
</script>