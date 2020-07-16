<template>
  <section class="gallery">
    <div class="row">
      <div v-for="character in characters" :key="character.id" class= "col-md-3">
        <!-- gallery__card -->
        <div class="gallery__card">
          <div class="gallery__img-wrap">
            <img :src="character.imgSrc" alt="" class="gallery__img" />
          </div>
          <div class="gallery__bottom">
            <h3 class="gallery__nick"> nick: {{character.nickname}}</h3>
            <p class="gallery__name">name: {{ character.name }}</p>
            <p class="gallery__date">birthday: {{character.birthday}}</p>
          </div>
        </div>
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
  }
}
</script>