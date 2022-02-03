<template>
  <div class="cover" @click="dialog_hide" v-if="show">
    <div @click.stop class="wrapper_dialog">
      <form @submit.prevent>
        <div class="input_group">
          <div class="name">
            <form-input
              custom_title="Ваше имя"
              custom_placeholder="Ваше имя"
              custom_type="name"
              v-model="name"
            />
          </div>
          <div>
            <form-input
              custom_title="mail"
              custom_placeholder="Ваш e-mail"
              custom_type="mail"
              v-model="mail"
            />
          </div>
        </div>
        <form-textarea
          custom_title="Текст сообщения"
          custom_placeholder="Введите текст сообщения"
          v-model="body"
          custom_height="120px"
        />
        <div class="btn_group">
            <form-submit @click="dialog_hide"
            custom_value = "Отмена"/>
            <form-submit
            @click="add_mesage"
            custom_value = "Отправить"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog-window",
  data() {
    return {      
      name: "",
      mail: "",
      body: "",
      list_mesage: [],
    };
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    dialog_hide() {
      this.$emit("update:show", false);
    },
    add_mesage() {
      const mesage = {
        id: Date.now (),
        name: this.name,
        mail: this.mail,
        body: this.body,
      }      
      this.list_mesage.push(mesage);
      this.name = '';
      this.mail = '';
      this.body = '';    
    },
  },
};
</script>

<style scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(8, 8, 8, 0.7);
}
.wrapper_dialog {
  padding: 20px;
  margin: auto;
  background-color: rgba(25, 30, 55);
}
.input_group {
  display: flex;
}
.name {
  margin-right: 20px;
}
.btn_group {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
