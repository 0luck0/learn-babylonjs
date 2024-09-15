<template>
    <canvas id="renderCanvas"></canvas>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { AppOne as App } from './AppOne';

onMounted(() => {
    const canvasElement: HTMLCanvasElement | null = document.getElementById('renderCanvas') as HTMLCanvasElement | null;

    if (canvasElement) {
        const app = new App(canvasElement);
        app.run();
    } else {
        console.error('Canvas element not found');
    }

})

</script>
<style scoped>
#renderCanvas {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    outline: 0px;

}
</style>