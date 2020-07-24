<template>
  <div class="home">
    <Header />
    <projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import projects from "../components/Projects";

export default {
  name: "Home",
  components: {
    Header,
    projects,
  },
};
</script>
