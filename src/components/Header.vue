<template>
  <div class="container-fluid text-light">
    <div
      class="row bg-light index-1 text-center d-flex justify-content-center "
    >
      <div class="col-12 p-2 m-h-30 spacer-20">
        <h1 class="text-shadow-3 text-dark p-2">
          Justin Gates Software Developer
        </h1>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
          <div class="pic-container shadow ">
            <img
              class="profile-pic"
              src="@/assets/profilepic.jpg"
              alt="picture"
            />
          </div>
        </div>
      </div>

      <div
        class="col-12 col-sm-6 p-1 py-2 px-sm-3 bg-light  p-lg-5 d-flex align-items-center"
      >
        <div class="text-left p-2 p-sm-3 shadow rounded text-shadow bg-dark">
          <h4 class="d-inline p-2 text-shadow-3 px-3  text-light">
            Profile
          </h4>
          <p class="">
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
    </div>
  </div>
</template>

<script></script>

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
}
.fixed {
  position: fixed;
}
.action {
  z-index: 100000;
  cursor: pointer;
}
</style>
