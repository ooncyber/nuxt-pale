<template>
  <section id="characters" class="col-md-12 mt-5 background-pacific-blue">
    <h1 class="text-center fw-bold text-white mt-4">Personagens</h1>

    <div class="input-group mx-auto my-4 w-50 col-md-12">
      <input
        type="text"
        class="form-control"
        id="character-name"
        placeholder="Digite para procurar..."
        aria-label="Digite para procurar..."
        aria-describedby="basic-addon2"
        v-model="pesquisaChar"
      />
      <span class="input-group-text" id="basic-addon2">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </div>
    <div class="cards row mx-auto my-4">
      <PersonagemView :pesquisaChar="pesquisaChar" />
    </div>
  </section>
</template>

<script>
import PersonagemView from "./PersonagemView.vue";
export default {
  components: { PersonagemView },
  data() {
    return {
      pesquisaChar: "",
    };
  },
};
</script>

<style>
</style>