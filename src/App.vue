<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link fs-4"
                active-class="active"
                aria-current="page"
                href="#"
                to="/"
              >
                Personagens
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fs-4"
                active-class="active"
                href="#"
                to="/about"
              >
                Sobre
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
import MainView from "./views/MainView";
export default {
  name: "App",
  title: "teste",
  data() {
    return {
      pesquisaChar: "",
    };
  },
  components: { MainView },
};
</script>

<style>
:root {
  /* BACKGROUND */
  --default-background: #202329;

  /* CSS HEX */
  --black: #000000ff;
  --pacific-blue: #00b0c8ff;
  --black-2: #000000ff;
  --skobeloff: #10777dff;
  --june-bud: #b1d34bff;

  /* CSS Gradient */
  --gradient-top: linear-gradient(
    0deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-right: linear-gradient(
    90deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-bottom: linear-gradient(
    180deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-left: linear-gradient(
    270deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-top-right: linear-gradient(
    45deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-bottom-right: linear-gradient(
    135deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-top-left: linear-gradient(
    225deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-bottom-left: linear-gradient(
    315deg,
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
  --gradient-radial: radial-gradient(
    #000000ff,
    #00b0c8ff,
    #000000ff,
    #10777dff,
    #b1d34bff
  );
}

* {
  font-family: "Didact Gothic";
}

nav {
  background-color: white;
}

.header-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 330px;
  width: 100%;
}

.form-control:focus {
  border-color: var(--june-bud);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--june-bud);
}

.input-group-text {
  background-color: var(--june-bud);
  border-color: var(--june-bud);
  color: #fff;
}

.background-pacific-blue {
  background-color: var(--pacific-blue);
  padding: 0;
}

.wave-bg {
  background-image: url("./assets/img/wave.svg");
  background-attachment: fixed;
  background-size: cover;
}

.status-Dead {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  background: rgb(214, 61, 46);
  margin-right: 5px;
}
.status-Alive {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  background: rgb(85, 204, 68);
  margin-right: 5px;
}
</style>