<template>
  <v-container fluid>
    <h1 class="text-center">Cadastro de Produtos</h1>
    <v-row justify="center">

      <v-col cols="12" sm="6">
        <v-card class="elevation-5 mt-6 pa-5">
          <v-card-title> Cadastro de Produtos</v-card-title>
          <div >
            <v-col cols="12" >
              <v-text-field
                  label="Nome do Produto"
                  :rules="[required]"
                  variant="outlined"
                  v-model="name">
              </v-text-field>
            </v-col>

            <v-col cols="12" >
              <v-textarea
                  label="Descrição"
                  variant="outlined"
                  v-model="description">
              </v-textarea>
            </v-col>

            <v-row justify="center">
              <v-col cols="12" sm="4">
                <v-text-field
                    label="Preço do Produto"
                    :rules="[required, isDecimal]"
                    variant="outlined"
                    v-model="price"
                    type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    label="Quantidade em estoque"
                    :rules="[required, isNumber]"
                    variant="outlined"
                    v-model="qtd_stock"
                    type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>

          <v-row justify="center">
            <v-btn @click="addItem">Cadastrar</v-btn>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      qtd_stock: '',
    };
  },
  methods: {
    addItem() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('price', this.price);
      formData.append('qtd_stock', this.qtd_stock);

      axios
          .post('/products', formData)
          .then((response) => {
            this.$store.dispatch('message', {
              text: response.data.message,
              color: 'green',
            });
            this.name = '';
            this.description = '';
            this.price = '';
            this.qtd_stock = '';
          })
          .catch((error) => {
            this.$store.dispatch('message', {
              text: error.response.data.message || 'Ocorreu um erro.',
              color: 'red',
            });
          });
    },
    required(v) {
      return !!v || 'Campo obrigatório!';
    },
    isDecimal(value) {
      return /^-?\d+(\.\d{1,2})?$/.test(value) || 'Informe um valor decimal válido.';
    },
    isNumber(value) {
      return /^\d+$/.test(value) || 'Informe um número válido.';
    },
  },
};
</script>

<style scoped>
/* Estilos CSS específicos do componente, se necessário */
</style>
