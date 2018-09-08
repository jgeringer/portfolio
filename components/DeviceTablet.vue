<template>
    <div class="Tablet">
        <svg class="svg svg--tablet" viewBox="0 0 475.55 622.54">
            <use xlink:href="#tablet"></use>
        </svg>
        <img class="ActualImage" :src="image" />
    </div>
</template>

<script>
export default {
    name: 'tablet',
    props: ['image']
}
</script>


<style lang="scss" scoped>
    .Tablet{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        overflow: hidden;
        z-index: 5;
    }
    svg {
        z-index: 5;
    }
    .ActualImage{
        position: absolute;
        top: 6.9%;
        left: 6.9%;
        width: 86.4%;
    }
</style>
