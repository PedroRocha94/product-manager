<template>
  <div class="product-list">
    <DataTable class="data-table" :value="products" :scrollable="true">
      <Column class="column-data-table" header="Id">
        <template #body="{data}">
          <RouterLink 
            tag="Button" 
            :to="`/${data.id}/details`"
            v-tooltip="'See Details'"
          >
            {{data.id}}
          </RouterLink>
        </template>
      </Column>

      <Column class="column-data-table" header="Name">
        <template #body="{data}">
          {{data.name}}
        </template>
      </Column>

      <Column class="column-data-table" header="Description">
        <template #body="{data}">
          {{data.description}}
        </template>
      </Column>

      <Column class="column-data-table" header="Price">
        <template #body="{data}">
          {{data.price}}
        </template>
      </Column>

      <Column class="column-data-table" header="Actions">
        <template #body="{ data }">
          <div class="column-data-table-buttons">
            <Button 
              icon="pi pi-pencil"
              v-tooltip.top="'Edit'"
              @click="editProduct(data)"
            />

            <Button
              v-if="productActive"
              icon="pi pi-eye-slash"
              class="p-button-warning"
              v-tooltip.top="'Inactive Product'"
              @click="inactiveProduct($event, data)"
            />

            <Button
              v-else
              icon="pi pi-eye"
              class="p-button-warning"
              v-tooltip.top="'Active Product'"
              @click="activeProduct($event, data)"
            />

            <Button
              v-show="!productActive"
              icon="pi pi-trash"
              class="p-button-danger"
              v-tooltip.top="'Remove Product'"
              @click="removeProduct($event, data)"
            />
          </div>
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
    activeProduct: {
      type: Function,
      default: new Function()
    },
    inactiveProduct: {
      type: Function,
      default: new Function()
    },
    removeProduct: {
      type: Function,
      default: new Function()
    }
  },
  methods: {
    editProduct(product) {
      this.$emit("edit-modal", product);
    }
  }
};
</script>