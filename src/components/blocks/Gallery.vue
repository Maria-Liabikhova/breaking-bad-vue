<template>
  <section class="gallery">
    <div class="row">
      <div v-for="character in characters" :key="character.id" class= "col-md-3">
        <!-- gallery__card -->
        <div class="gallery__card">
          <div class="gallery__img-wrap">
            <img
              src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
              alt=""
              class="gallery__img"
            />
          </div>
          <div class="gallery__bottom">
            <h3 class="gallery__nick"> nick "{{character.nick}}"</h3>
            <p class="gallery__name">name "{{ character.name }}"</p>
            <p class="gallery__date">birthday: "{{character.birthday}}"</p>
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
  data() {
    return {
      characters: [
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nick: 'Heisenberg1',
          name: 'Walter White1',
          birthday: '09-07-1958'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nick: 'Heisenberg2',
          name: 'Walter White2',
          birthday: '09-07-1958'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nick: 'Heisenberg3',
          name: 'Walter White3',
          birthday: '09-07-1958'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nick: 'Heisenberg4',
          name: 'Walter White4',
          birthday: '09-07-1958'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nick: 'Heisenberg5',
          name: 'Walter White5',
          birthday: '09-07-1958'
        }
      ]
    }
  }
}
</script>