<template>
  <section>
    <Header />
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-3">
        <div class="gallery__card">
          <div class="gallery__img-wrap">
            <img :src="character.img" alt="" class="gallery__img" />
          </div>
          <div class="gallery__bottom">
            <h3 class="gallery__nick">nick: {{ character.nickname }}</h3>
            <p class="gallery__name">name: {{ character.name }}</p>
            <p class="gallery__date">birthday: {{ character.birthday }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/blocks/Header'
import Sidebar from '@/components/blocks/Sidebar'
import axios from 'axios'
export default {
  name: 'Character',
  props: ['id'],
  components: {
    Header,
    Sidebar
  },

  data() {
    return {
      title: 'Character',
      character: {}
    }
  },

  created() {
    this.getCharacter()
  },

  methods: {
    async getCharacter() {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters/${this.id}`
      )
      this.character = { ...response.data[0] }
      return this.character
    }
  }
}
</script>
