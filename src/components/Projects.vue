<template>
  <div class="container-fluid text-light">
    <div class="row bg-info">
      <div class="col-12">
        <h2 class="text-shadow">Portfolio</h2>
      </div>
      <div class="col-4 p-0 hide blur">
        <div class="card hide">
          <img
            class="card-img-top blurimg"
            src="https://placehold.it/140"
            width="100"
            alt
          />
          <div class="show slide">
            <div class="p-relative-30 bright">
              <h4 class="bright">Name</h4>
              <div class="d-flex justify-content-around">
                <h5>
                  <i class="fas fa-link p-1"></i>
                  <i class="fas fa-code p-1"></i>
                </h5>
              </div>
              <p>Description here</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 p-0 hide blur">
        <div class="card hide">
          <img
            class="card-img-top blurimg"
            src="https://placehold.it/140"
            width="100"
            alt
          />
          <div class="show slide">
            <div class="p-relative-30 bright">
              <h4 class="bright">Name</h4>
              <div class="d-flex justify-content-around">
                <h5>
                  <i class="fas fa-link p-1"></i>
                  <i class="fas fa-code p-1"></i>
                </h5>
              </div>
              <p>Description here</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 p-0 hide blur">
        <div class="card hide">
          <img
            class="card-img-top blurimg"
            src="https://placehold.it/140"
            width="100"
            alt
          />
          <div class="show slide">
            <div class="p-relative-30 bright">
              <h4 class="bright">Name</h4>
              <div class="d-flex justify-content-around">
                <h5>
                  <i class="fas fa-link p-1"></i>
                  <i class="fas fa-code p-1"></i>
                </h5>
              </div>
              <p>Description here</p>
            </div>
          </div>
        </div>
      </div>
      n
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.show {
  display: none;
}
.darken:hover {
  background-color: rgb(51, 51, 51);
}
.blur:hover .blurimg {
  filter: brightness(0.3);
}
.p-relative-30 {
  position: relative;
  width: 32vw;
}
.hide:hover .show {
  color: whitesmoke;
  filter: drop-shadow(rgba(0, 0, 0, 0.219) 2px 2px 2px);
  display: inline;
  cursor: pointer;
}
.slide {
  position: absolute;
  top: 5px;
}
</style>
