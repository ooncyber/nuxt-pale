<template>
  <div class="row">
    <div class="col-md-6" v-for="char in characters" :key="char.id">
      <div class="card mb-3 mx-auto" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="char.image"
              class="img-fluid rounded-start"
              :alt="char.name"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ char.name }}</h5>
              <p class="card-text">
                <b>Genêro:</b> {{ char.gender }}
                <br />
                <b>Espécie:</b> {{ char.species }}
              </p>
              <p class="card-text">
                <span :class="'status-' + char.status"></span>
                <small class="text-muted"> {{ char.status }} </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonagemView",
  props: ["pesquisaChar"],
  watch: {
    pesquisaChar: function () {
      this.getCharacters();
    },
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      const url = this.API_BASE_URL + "/character/?name=" + this.pesquisaChar;
      if (name) {
        url += `?name=${name}`;
      }
      const res = await fetch(url);
      this.characters = (await res.json()).results;
    },
  },
  data() {
    return {
      characters: [],
      API_BASE_URL: "https://rickandmortyapi.com/api",
    };
  },
};
</script>
