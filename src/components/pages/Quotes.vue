<template>
  <section>
    <page-header></page-header>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h1 class="text text--h1">Quotes</h1>
        <gallery :characters="Quotes"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/blocks/Header'
import Sidebar from '@/components/blocks/Sidebar'
import Gallery from '@/components/blocks/Gallery'

export default {
  name: 'Quotes',
  components: {
    'page-header': Header,
    sidebar: Sidebar,
    gallery: Gallery
  },
  data() {
    return {}
  }
}
</script>