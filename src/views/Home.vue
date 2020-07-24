<template>
  <div class="home">
    <Header />
    <projects />
    <resume />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import projects from "../components/Projects";
import resume from "../components/Resume";
export default {
  name: "Home",
  components: {
    Header,
    projects,
    resume,
  },
};
</script>
