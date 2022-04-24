new Vue({
  el: "#app",
  methods: {
    onFileChange(e) {
      let result = [];
      const files = e.target.files;
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        result.push(file.name);
      }
      console.log("result => ", JSON.stringify(result));
      return result;
    }
  }
})