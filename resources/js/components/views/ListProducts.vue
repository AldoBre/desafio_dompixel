<template>
  <v-container fluid>
    <h1 class="text-center">Produtos Cadastrados</h1>
    <v-row justify="center">
      <v-col v-for="item in itens" :key="item.id" cols="12" md="2" sm="4">
        <v-card class="elevation-5 mt-6 pa-5">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>Descrição - {{ item.description }}</v-card-text>
          <div class="d-flex justify-space-around">
            <span>Preço: R$ {{item.price}}</span>
            <span>Estoque:{{item.qtd_stock}}</span>
          </div>
          <v-card-actions>
            <v-btn class="bg-blue" @click="editItem(item)">Editar</v-btn>
            <v-btn class="bg-red" @click="deleteItem(item.id)">Excluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal para edição de produtos -->
    <v-dialog v-model="editDialog" max-width="500">
      <v-card>
        <v-card-title>Editar Produto</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedItem.name" label="Nome do Produto"></v-text-field>
          <v-textarea v-model="editedItem.description" label="Descrição"></v-textarea>
          <v-text-field v-model="editedItem.price" label="Preço do Produto"></v-text-field>
          <v-text-field v-model="editedItem.qtd_stock" label="Quantidade em Estoque"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveEdit">Salvar</v-btn>
          <v-btn @click="cancelEdit">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itens: [],
      editDialog: false,
      editedItem: {
        id: null,
        name: '',
        description: '',
        price: '',
        qtd_stock: '',
      },
    };
  },
  created() {
    this.getItens();
  },
  methods: {
    getItens() {
      axios.get('/products').then((response) => {
        this.itens = response.data;
      });
    },
    editItem(item) {
      this.editedItem.id = item.id;
      this.editedItem.name = item.name;
      this.editedItem.description = item.description;
      this.editedItem.price = item.price;
      this.editedItem.qtd_stock = item.qtd_stock;
      this.editDialog = true;
    },
    saveEdit() {
      axios.patch(`/products/${this.editedItem.id}`, this.editedItem)
          .then((response) => {
            this.$store.dispatch("message", {
              text: response.data.message,
              color: "green",
            });
        this.editDialog = false;
        this.getItens();
      });
    },
    cancelEdit() {
      this.editDialog = false;
    },
    deleteItem(id) {
      axios.delete(`/products/${id}`)
          .then((response) => {
            this.$store.dispatch("message", {
              text: response.data.message,
              color: "green",
            });
        this.getItens();
      });
    },
  },
};
</script>

<style scoped>

</style>
