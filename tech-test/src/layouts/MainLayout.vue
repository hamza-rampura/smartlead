<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="global-header">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
        <div>
          <div
            class="flex flex-center cursor-pointer header-left"
            @click="handleLogoClick"
          >
            <img src="../assets/logo.svg" alt="Logo" class="logo_img" />
          </div>
        </div>
        <div v-if="isUserLoggedIn" class="row flex flex-center header-right">
          <div class="pill">
            <img src="../assets/stars.svg" alt="Stars" class="stars-icon" />
            <span class="text font-weight-500">Trial expires in 12 days</span>
          </div>
          <div class="header-right-icon">
            <img src="../assets/union.svg" alt="Union" />
          </div>
          <div class="header-right-icon">
            <img src="../assets/gifts.svg" alt="Gifts" />
          </div>
          <div class="header-right-icon">
            <div class="cursor-pointer">
              <img src="../assets/ellipse.png" alt="User" />
              <logout-menu></logout-menu>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isUserLoggedIn"
      width="230"
      show-if-above
      bordered
      persistent
    >
      <NavLinks
        v-for="link in linksList"
        :key="link.title"
        :link="link"
        :src="link.icon"
      />
    </q-drawer>

    <q-page-container class="page-body">
      <!-- <h1 @click="toggleLeftDrawer">{{ isUserLoggedIn }}</h1> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import NavLinks from "src/components/NavLinks.vue";
import LogoutMenu from "components/LogoutMenu.vue";

const linksList = [
  {
    title: "All Leads",
    icon: "../assets/leads.svg",
    to: "/leads",
  },
  {
    title: "Master Inbox",
    icon: "../assets/leads.svg",
    to: "/inbox",
  },
  {
    title: "Email Campaigns",
    icon: "../assets/leads.svg",
    to: "/dashboard",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    NavLinks,
    LogoutMenu,
  },

  data() {
    return {
      linksList,
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
