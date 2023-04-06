<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'KakaoMap',
  data () {
    return {
      // map 객체 설정
      map: null
    }
  },
  setup () {},
  created () {},
  mounted () {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    } else {
      this.loadScript()
    }
  },
  unmounted () {},
  methods: {
    loadScript () {
      const script = document.createElement('script')
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false'
      script.onload = () => window.kakao.maps.load(this.loadMap)

      document.head.appendChild(script)
    },
    loadMap () {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }

      this.map = new window.kakao.maps.Map(container, options)
      this.loadMaker()
    },
    // 지정한 위치에 마커 불러오기
    loadMaker () {
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      )

      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      })

      marker.setMap(this.map)
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 600px;
}
</style>
