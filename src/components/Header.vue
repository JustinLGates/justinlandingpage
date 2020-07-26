<template>
  <div class="container-fluid text-light">
    <div
      class="row bg-light index-1 text-center d-flex justify-content-center "
    >
      <div class="col-12 p-2 m-h-30 spacer-20">
        <h1 class="text-shadow p-2">Justin Gates Software Developer</h1>
      </div>
      <div class="col-6 index-1 ">
        <div
          class="d-flex justify-content-center align-items-center index-1 ih"
        >
          <div class="pic-container shadow-lg m-2 fixed index-1">
            <img
              class="profile-pic"
              src="@/assets/profilepic.jpg"
              alt="picture"
            />
          </div>
        </div>
      </div>

      <div
        class="col-12 col-sm-6 bg-light p-2 px-3 p-lg-5 d-flex align-items-center"
      >
        <div class="text-left">
          <h4
            class="d-inline mx-3 p-2 text-shadow px-4 bg-dark rounded-top text-primary"
          >
            Profile
          </h4>
          <p class="p-0 bg-dark m-0 p-2 shadow rounded text-shadow">
            Experience building  full stack applications Using the solid
            principals of object oriented programming and the MVC design pattern
            . Familiar with several programming languages and frameworks.
            Passionate problem solver that loves to learning new things. 10
            Years of experience leading others in a fast paced environment.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 m-auto">
        <div class="p-2 bg-light text-primary contact-bar">
          <h4 class="p-0 m-0">
            <a
              target="_blank"
              href="www.linkedin.com/in/justin-l-gates"
              class="action"
            ></a>
            <i class="fab fa-linkedin-in py-1 action pg"></i>
            <br />
            <a
              target="_blank"
              href="https://github.com/JustinLGates"
              class="action"
            ></a>
            <i class="fab fa-github-square text-dark py-1 action pg"></i>
          </h4>
        </div>
      </div>
      <!-- <h4 class="p-2">Full Stack Experiance</h4> 
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
      </div>-->
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
.contact-bar {
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-right: solid rgba(0, 0, 0, 0.7) 1px;
  border-top: solid rgba(0, 0, 0, 0.7) 1px;
  border-bottom: solid rgba(0, 0, 0, 0.7) 1px;
  position: fixed;
  z-index: 390;
  left: -10px;
  top: 20vh;
}
.contact-bar:hover .pg {
  transition: 0.3s;
  left: 0px;
  padding-left: 1.5rem;
}
.pg {
  transition: 0.3s;
  padding-left: 0.3rem;
}
.text-shadow {
  text-shadow: rgba(39, 39, 39, 0.828) 2px 2px 3px,
    rgba(39, 39, 39, 0.486) 4px 4px 6px;
}
.text-shadow-2 {
  text-shadow: rgba(39, 39, 39, 0.774) 2px 2px 3px,
    rgba(39, 39, 39, 0.534) 4px 4px 6px;
}
.pic-container {
  background: rgb(123, 126, 131);
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
}
.ih {
  min-height: 285px;
}
.profile-pic {
  width: 15rem;
  z-index: 1;
}
.fixed {
  position: fixed;
}
.action {
  z-index: 100000;
  cursor: pointer;
}
.z-index-1 {
  z-index: 100;
}
.z-index-2 {
  z-index: 200;
}
.z-index-3 {
  z-index: 0;
}
</style>
