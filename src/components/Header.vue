<template>
  <div class="container-fluid text-light">
    <div class="row bg-dark p-2">
      <div class="col-12 p-2 m-h-30">
        <h1 class="text-shadow p-2">Justin Gates Software Developer</h1>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <div class="pic-container shadow-lg m-2">
          <img
            class="profile-pic"
            src="@/assets/profilepic.jpg"
            alt="picture"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 m-auto text-shadow">
        <h4 class="p-2">Full Stack Experiance</h4>
        <div class="d-flex justify-content-around pt-2">
          <div class="text-left">
            <h4>Front end</h4>
            <h6>JavaScript</h6>
            <h6>HTML 5</h6>
            <h6>CSS 3</h6>
            <h6>Vue</h6>
            <h6>BootStrap</h6>
          </div>

          <div class="text-left">
            <h4>Back end</h4>
            <h6>C#</h6>
            <h6>SQL</h6>
            <h6>MongoDb</h6>
            <h6>Node</h6>
            <h6>.Net</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.pageLoad();
  },
  methods: {
    data() {
      return {
        // message: {},
      };
    },
    // pageLoad() {
    //   setTimeout(() => {}, 1000);
    //   let str = "Justin Gates Software Developer";

    //   message.str = str;
    // },
  },
};
</script>

<style>
.text-shadow {
  text-shadow: rgb(39, 39, 39) 2px 2px 3px, rgba(39, 39, 39, 0.705) 4px 4px 6px;
}

.pic-container {
  background: rgb(123, 126, 131);
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
}
.profile-pic {
  width: 15rem;
}
</style>
