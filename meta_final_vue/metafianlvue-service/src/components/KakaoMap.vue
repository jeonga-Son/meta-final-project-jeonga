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
      const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }
      const map = new kakao.maps.Map(container, option)
      // HTML5의 지오로케이션으로 사용할 수 있는 지 확인
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옴
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude // 위도

          const lon = position.coords.longitude // 경도

          const locPosition = new kakao.maps.LatLng(lat, lon)
          const message = '<div style="padding:5px;">여기에 계신가요?</div>' // 인포윈도우에 표시될 내용

          // 마커와 인포윈도우를 표시한다.
          displayMarker(locPosition, message)
        })
      } else {
        var locPostion = new kakao.maps.LatLng(33.450701, 126.570667)
        var message = '현재위치를 찾을 수 없습니다.'

        displayMarker(locPostion, message)
      }
      // 지도에 마커와 인포윈도우를 표시하는 함수
      function displayMarker (locPosition, message) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition
        })
        const iwContent = message // 인포윈도우에 표시할 내용
        const iwRemovaable = true
        // 인포 윈도우 생성
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removavle: iwRemovaable
        })
        infowindow.open(map, marker)

        map.setCenter(locPosition)
      }
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
