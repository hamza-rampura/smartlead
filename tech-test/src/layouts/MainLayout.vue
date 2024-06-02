<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="global-header">
        <div>
          <div
            class="flex flex-center cursor-pointer header-left"
            @click="handleLogoClick"
          >
            <img
              src="../../public/assets/logo.svg"
              alt="Logo"
              class="logo_img"
            />
          </div>
        </div>
        <div v-if="isUserLoggedIn" class="row flex flex-center header-right">
          <div class="pill">
            <img
              src="../../public/assets/stars.svg"
              alt="Stars"
              class="stars-icon"
            />
            <span class="text font-weight-500">Trial expires in 12 days</span>
          </div>
          <div class="header-right-icon">
            <img src="../../public/assets/union.svg" alt="Union" />
          </div>
          <div class="header-right-icon">
            <img src="../../public/assets/gifts.svg" alt="Gifts" />
          </div>
          <div class="header-right-icon">
            <div class="cursor-pointer">
              <img src="../../public/assets/ellipse.png" alt="User" />
              <logout-menu></logout-menu>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isUserLoggedIn"
      :width="230"
      show-if-above
      bordered
      persistent
      class="column justify-between"
    >
      <div>
        <NavLinks v-for="link in linksList" :key="link.title" :link="link" />
      </div>
      <div>
        <div class="custom-border-seperator"></div>
        <DrawerFooter
          v-for="link in anchorsList"
          :key="link.title"
          :link="link"
        />
      </div>
    </q-drawer>

    <q-page-container class="page-body">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { linksList } from "../data/constant.js";
import { anchorsList } from "../data/constant.js";
import { defineComponent, ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import NavLinks from "components/NavLinks.vue";
import DrawerFooter from "components/DrawerFooter.vue";
import LogoutMenu from "components/LogoutMenu.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    NavLinks,
    DrawerFooter,
    LogoutMenu,
  },

  data() {
    return {
      linksList,
      anchorsList,
      leftDrawerOpen: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getUserDetails"]),
    isUserLoggedIn() {
      return this.getUserDetails;
    },
  },

  methods: {
    ...mapActions("auth", ["toggle"]),
    toggleLeftDrawer() {
      this.toggle();
    },
    handleLogoClick() {
      if (this.isUserLoggedIn) {
        this.$router.push({ name: "dashboard" });
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
});
</script>
<style lang="scss">
.logo_img {
  height: 31px;
  width: 160px;
}
.pill {
  border-radius: 46px;
  font-size: 12px;
  height: 30px;
  display: flex;
  place-items: center;
  background-color: #333788;
  padding: 0 12px;
  .stars-icon {
    height: 16px;
    width: 16px;
  }
  .text {
    color: rgba(256, 256, 256, 0.8);
    padding-left: 9px;
  }
}
.header-right-icon {
  height: 18px;
  width: 18px;
  display: flex;
  place-items: center;
  img {
    display: block;
  }
}
.header-right > * {
  margin: 0 10px;
}
</style>
