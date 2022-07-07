<template>
  <div class="product-list">
    <DataTable :value="products" responsiveLayout="scroll">

      <Column header="Details">
        <template #body="{data}">
          <Button 
            icon="pi pi-eye"
            @click="openProductDetails(data)"
          />
        </template>
      </Column>

      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      >
      </Column>
      <Column header="Actions">
        <template #body="{ data }">
          <Button 
            label="Edit" 
            @click="editProduct(data)"
          />

          <Button
            v-show="!productActive"
            label="Remove"
            class="p-button-danger"
            @click="removeProduct(data)"
          />

          <Button
            v-if="productActive"
            label="Inactive"
            class="p-button-warning"
            @click="inactiveProduct(data)"
          />

          <Button
            v-else
            label="Active"
            class="p-button-warning"
            @click="activeProduct(data)"
          />
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
      default: new Array(),
    },
    productActive: {
      type: Boolean,
      default: true,
    },
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
      { field: "description", header: "Description" },
      { field: "price", header: "Price" },
    ];
  },
  methods: {
    editProduct(product) {
      this.$emit("edit-modal", product);
    },
    inactiveProduct(product) {
      this.$emit("inactive-product", product);
    },
    activeProduct(product) {
      this.$emit("active-product", product);
    },
    removeProduct(product) {
      this.$emit("remove-product", product);
    },
    openProductDetails(product){
      this.$emit('see-details', product);
    }
  },
};
</script>