<template>
  <section class="gallery">
    <div class="row">
      <div v-for="quality in characters" :key="quality.id" class="col-md-3">
        <!-- gallery__card -->
        <router-link
          :to="setLink(quality)"
          class="gallery__card"
          :class="{ 'gallery__card--season': $route.path === '/seasons' }"
        >
          <div
            class="gallery__img-wrap"
            :class="{ 'gallery__img-wrap--season': $route.path === '/seasons' }"
          >
            <img :src="quality.img" alt="" class="gallery__img" />
          </div>

          <div v-if="$route.path === '/'" class="gallery__bottom">
            <h3 class="gallery__nick">nick:{{ quality.nickname }}</h3>
            <p class="gallery__name">name: {{ quality.name }}</p>
            <p class="gallery__date">birthday: {{ quality.birthday }}</p>
          </div>

          <div v-else class="gallery__bottom gallery__bottom--season">
            <h3 class="gallery__nick">air-date: {{ quality.air_date }}</h3>
            <p class="gallery__name">characters: {{ quality.characters }}</p>
            <p class="gallery__date">episode id: {{ quality.episode_id }}</p>
            <p class="gallery__name">season: {{ quality.season }}</p>
          </div>
        </router-link>
        <!-- gallery__card END -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },

  methods: {
    setLink(quality) {
      return this.$route.path === '/'
        ? `/character/${quality.char_id}`
        : `/season/${quality.episode_id}`
    }
  }
}
</script>
