<template>
  <div class="home">
    <Header />
    <projects />
    <!-- <resume class="col-12 col-lg-10 col-md-11 m-auto " /> -->
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
