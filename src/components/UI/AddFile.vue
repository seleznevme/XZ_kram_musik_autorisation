<template>
  <nav-button>
    <div class="input__wrapper">
      <input
        name="file"
        type="file"
        id="input__file"
        class="input input__file"
      />
      <label for="input__file" class="input__file-button">
        <span class="input__file-icon-wrapper"
          ><img
            class="input__file-icon"
            src="./img/add.png"
            alt="Выбрать файл"
            width="25"
        /></span>
        <span class="input__file-button-text">Выберите файл</span>
      </label>
    </div>
  </nav-button>
</template>

<script>
export default {
  name: "add-file",
  props: {},
};
</script>

<style  scoped>
.input__wrapper {
  position: relative;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-icon-wrapper {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
}

.input__file-button {   
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;  
  cursor: pointer;
  margin: 0 auto;
}
</style>