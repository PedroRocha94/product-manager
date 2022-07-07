<template>
  <div class="product-list">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column header="Id">
        <template #body="{data}">
          <RouterLink tag="Button" :to="`/${data.id}/details`">
            {{data.id}}
          </RouterLink>
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
            icon="pi pi-pencil"
            @click="editProduct(data)"
          />

          <Button
            v-if="productActive"
            icon="pi pi-eye-slash"
            class="p-button-warning"
            @click="inactiveProduct(data)"
          />

          <Button
            v-else
            icon="pi pi-eye"
            class="p-button-warning"
            @click="activeProduct(data)"
          />

          <Button
            v-show="!productActive"
            icon="pi pi-trash"
            class="p-button-danger"
            @click="removeProduct(data)"
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
    }
  },
};
</script>