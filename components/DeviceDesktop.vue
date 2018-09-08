<template>
    <div class="Desktop">
        <svg class="svg svg--desktop" viewBox="0 0 1092.82 42.47">
            <use xlink:href="#desktop"></use>
        </svg>
        <img class="ActualImage" :src="image" />
    </div>
</template>

<script>
export default {
    name: 'desktop',
    props: ['image']
}
</script>


<style lang="scss" scoped>
    .Desktop{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        overflow: hidden;
    }
    .ActualImage{
        
    }
</style>
