<template>
  <q-page class="flex justify-center">
    <q-card class="login-card text-black q-mt-xl">
      <q-card-section class="column items-center">
        <div class="heading">Welcome to Smartlead.ai</div>
        <div class="message">Log in to your account</div>
      </q-card-section>
      <q-card-section class="login-form">
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
        <q-form @submit="onSubmit">
          <div class="input-container">
            <label class="input-label q-mb-xs">Email</label>
            <q-input
              v-model="email"
              outlined
              type="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter email',
              ]"
            />
          </div>
          <div class="input-container">
            <div class="row full-width justify-between q-mb-xs">
              <label class="input-label">Password</label>
              <span class="font-color-primary font-weight-500 cursor-pointer"
                >Forgot Password?</span
              >
            </div>
            <q-input
              v-model="password"
              outlined
              :type="isPwd ? 'password' : 'text'"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please enter password',
              ]"
            >
              <template v-slot:append>
                <span class="cursor-pointer icon-text" @click="isPwd = !isPwd">
                  {{ isPwd ? "Show" : "Hide" }}</span
                >
              </template></q-input
            >
          </div>
          <q-btn
            class="primary-btn sign-in q-mt-xs"
            label="Sign In"
            type="submit"
            :disable="isDisable"
            :loading="loading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import { users } from "../data/constant.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      errorMessage: null,
      loading: false,
    };
  },
  computed: {
    isDisable() {
      return !(this.email && this.password);
    },
  },
  created() {},
  methods: {
    ...mapActions("auth", ["setUserDetailsFn"]),
    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        for (let user of users) {
          if (user.email == this.email && user.password == this.password) {
            this.errorMessage = null;
            this.loading = false;
            this.setUserDetailsFn(this.email);
            this.$router.push({ name: "dashboard" });
            return;
          }
        }
        this.errorMessage = "Incorrect email id or password.";
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.login-card {
  width: 545px;
  padding: 50px 60px;
  height: 100%;
  max-height: 454px;
  margin-top: 74px;
  .heading {
    font-size: 24px;
    font-weight: 600;
  }
  .message {
    font-size: 14px;
    font-weight: 400;
  }
  .sign-in {
    width: 100%;
    text-transform: none;
  }
  .icon-text {
    color: #686b8a;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  .input-container {
    .input-label {
      font-size: 14px;
      color: #7a7d9c;
    }
  }
  .login-form {
    padding: 0;
  }
}
</style>
