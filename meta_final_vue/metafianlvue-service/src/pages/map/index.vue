<template>
  <!-- map section start -->
    <div class="services_section layout_padding">
      <div class="container">
        <h1 class="services_taital"><span>Our</span> <img src="@/assets/images/icon-1.png"> <span style="color: #1f1f1f">Map</span></h1>
        <KakaoMap/>
      </div>
    </div>
    <!-- map section start -->
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
export default {
  name: 'Service',
  components: {
    KakaoMap
  },
  setup () {
  }
}
</script>
