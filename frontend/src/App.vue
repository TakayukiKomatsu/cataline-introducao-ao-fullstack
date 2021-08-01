<template>
	<h1>{{ message }}</h1>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		data() {
			return {
				message: 'Hello world',
			}
		},
	})
</script>

<style></style>
