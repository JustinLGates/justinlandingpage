<template>
  <div>
    <h1>Resume...</h1>
    <object data="../assets/resume.pdf" type="application/pdf">
      <iframe
        src="https://docs.google.com/viewer?url=../assets/resume.pdf&embedded=true"
      />
      <!-- <iframe src="../assets/resume.pdf" type="application/pdf" /> -->
    </object>

    <!-- <pdf
      src="../assets/resume.pdf"
      
      @num-pages="0"
      @page-loaded="0"
    ></pdf> -->
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  data() {
    return {
      // pdflink: require("../assets/resume.pdf"),
    };
  },
  components: {
    pdf,
  },
};
</script>
