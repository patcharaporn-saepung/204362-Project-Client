<template>
  <div>
    <div class="imgcontainer"></div>
    <div class="navbar">
      <nav class="navbar" :class="active" @click.prevent>
        <nuxt-link to="/home" class="nav-link home">หน้าหลัก</nuxt-link>
        <nuxt-link to="/news" class="nav-link news">ข่าว</nuxt-link>
        <nuxt-link to="/dogs" class="nav-link dogs">สุนัขในโครงการ</nuxt-link>
        <nuxt-link to="/donate" class="nav-link donate">บริจาค</nuxt-link>
        <nuxt-link to="/contact" class="nav-link contact">ติดต่อเรา</nuxt-link>
        <nuxt-link to="/report" class="nav-link report">รายงานปัญหา</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserNavbar',
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';

.imgcontainer {
  width: 100%;
  height: 360px;
  background-image: url('~assets/images/tia.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.navbar {
  background-color: var.$violet;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.nav-link {
  @extend %animate-all;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1em;
  margin: 0rem 1em;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: color.lightness(color.alpha(red, -0.25), 40%);
  }
}
</style>
