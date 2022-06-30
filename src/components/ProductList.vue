<template>
  <div>
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
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" },
    ];
  },
  async mounted() {
    try {
      const response = await getAllProducts();
      console.log(response)
    } catch {
      console.log("Error");
    }
  },
};
</script>