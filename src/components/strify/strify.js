export default {
  data() {
    return {
      controls: false
    };
  },
  methods: {
    playAudio() {
      let _this = this;
      let video = document.getElementById("strify-video");
      _this.controls = true;
      video.play();
    }
  }
}