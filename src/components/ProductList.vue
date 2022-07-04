<template>
  <div class="product-list">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      >
      </Column>
      <Column header="Actions">
        <template #body>
          <Button label="Edit" />
          <Button label="Remove" 
            class="p-button-danger" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: new Array()
    }
  },
  data() {
    return {
      columns: null,
    };
  },
  created() {
    this.columns = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "description", header: "Description" }
    ];
  }
};
</script>