<template>
  <title>메타멍멍 |</title>
    <!--header section start -->
    <MainHeader/>
    <router-view/>
    <MainFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default ({
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  },
  setup () {
  }
})
</script>
