<template>
  <div class="product-list">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column header="Id">
        <template #body="{data}">
          <RouterLink 
            tag="Button" 
            :to="`/${data.id}/details`"
            @click="searchProductById(data)"  
          >
            {{data.id}}
          </RouterLink>
        </template>
      </Column>

      <Column header="Name">
        <template #body="{data}">
          {{data.name}}
        </template>
      </Column>

      <Column header="Description">
        <template #body="{data}">
          {{data.description}}
        </template>
      </Column>

      <Column header="Price">
        <template #body="{data}">
          {{data.price}}
        </template>
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
    searchProductById(product){
      this.$emit('search-product', product);
    }
  },
};
</script>