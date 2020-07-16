<template>
  <header class="header">
    <div class="container">
      <nav class="nav nav--navbar">
        <router-link to="/" :class="{ active: $route.path === '/'}" class="link link--navbar">characters</router-link>
        <router-link to="/seasons" :class="{ active: $route.path === '/seasons'}" class="link link--navbar">seasons</router-link>
        <router-link to="/" class="link link--navbar">episodes</router-link>
        <router-link to="/" class=" link link--navbar">quotes</router-link>
        <router-link to="/" class="link link--navbar">deaths</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {}
  }
}
</script>