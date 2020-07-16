<template>
  <section>
    <page-header></page-header>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h1 class="text text--h1">Characters</h1>
        <gallery :characters="characters"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/blocks/Header'
import Sidebar from '@/components/blocks/Sidebar'
import Gallery from '@/components/blocks/Gallery'

export default {
  name: 'Characters',
  components: {
    'page-header': Header,
    sidebar: Sidebar,
    gallery: Gallery
  },
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
            'https://majdkhatib.com/wp-content/uploads/2018/03/Breaking-Bad-Walter-White1.jpg?x72778',
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
            'https://majdkhatib.com/wp-content/uploads/2018/03/Breaking-Bad-Walter-White1.jpg?x72778',
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