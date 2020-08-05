<template>
  <header
    class="header"
    :class="{
      'header__yellow-bottom':
        $route.path === '/episodes' ||
        $route.path === '/quotes' ||
        $route.path === '/deaths'
    }"
  >
    <!-- задание для продвинутых ч1. в header перенесите ссылки в data и перепишите используя в v-for.
   для активного класса используйте функцию. Подсказка ( :class="blablabla()" ) -->

    <!-- <header class="header" :class="{ 'header__green-bottom' : $route.path === '/episodes'}" :class="{ 'header__green-bottom' : $route.path === '/quotes'}" :class="{ 'header__green-bottom' : $route.path === '/deaths'}"> -->
    <div class="container">
      <nav class="nav nav--navbar">
        <router-link
          v-for="links in pages"
          :key="links.id"
          :to="links.link"
          class="link link--navbar"
          >{{ links.page }}</router-link
        >
        <!-- <router-link
          to="/seasons"
          :class="{ active: $route.path === '/seasons' }"
          class="link link--navbar"
          >seasons</router-link
        >
        <router-link
          to="/episodes"
          :class="{ active: $route.path === '/episodes' }"
          class="link link--navbar"
          >episodes</router-link
        >
        <router-link
          to="/quotes"
          :class="{ active: $route.path === '/quotes' }"
          class="link link--navbar"
          >quotes</router-link
        >
        <router-link
          to="/deaths"
          :class="{ active: $route.path === '/deaths' }"
          class="link link--navbar"
          >deaths</router-link
        > -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'bbheader',
  data() {
    return {
      pages: [
        { link: '/', page: 'Characters' },
        { link: '/seasons', page: 'seasons' },
        { link: 'episodes', page: 'episodes' },
        { link: 'quotes', page: 'quotes' },
        { link: '/deaths', page: 'deaths' }
      ]
    }
  }
}
</script>
