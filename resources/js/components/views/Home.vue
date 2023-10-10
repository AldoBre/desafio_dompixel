<template>
  <v-container fluid>
    <v-row justify="center" class="mt-6">
      <h1>Olá esse é o desafio da Dom Pixel </h1>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="8" align="center">
        <v-card class="elevation-5 py-5 pa-5">
          <v-card-text >
            <div>
              <h2>Meus Contatos</h2>
              <div class="d-flex justify-center gap mt-6">

                <a href="https://github.com/AldoBre" target="_blank" class="link-no-style">
                  <v-btn prepend-icon="mdi-github" class="bg-black">GitHub</v-btn>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5549999733762" target="_blank" class="link-no-style">
                  <v-btn prepend-icon="mdi-whatsapp" class="bg-green">WhatsApp</v-btn>
                </a>
                <a href="https://www.linkedin.com/in/aldo-bressan/" target="_blank" class="link-no-style">
                  <v-btn prepend-icon="mdi-linkedin" class="bg-blue">LinkedIn</v-btn>
                </a>

              </div>
            </div>
          </v-card-text>
          <v-img src="./img/logo.png" width="300">
          </v-img>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>

</script>

<style scoped>
.gap{
  gap: 1rem;
}
.link-no-style {
  text-decoration: none;
  color: inherit;
}
</style>