<template>
	<div>
		<GmapMap
			:center="center"
			:zoom="15"
			ref="mapRef"
			style="min-height : 65vh;"
			:options="{
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				rotateControl: false,
				fullscreenControl: true,
				disableDefaultUi: false,
			}"
		>
		
		</GmapMap>
	</div>
</template>
<script>
export default {
	name: "mapComponent",
	data() {
		return {
			center: {
				lat: -26.4791,
				lng: 31.3068,
			},
		};
	},
};
</script>

