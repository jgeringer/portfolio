<template>
    <div class="Mobile">
        <svg class="svg svg--mobile" viewBox="0 0 261.6 530.1">
            <use xlink:href="#mobile"></use>
        </svg>
        <img class="ActualImage" :src="image" />
    </div>
</template>

<script>
export default {
    name: 'mobile',
    props: ['image']
}
</script>


<style lang="scss" scoped>
    .Mobile{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 360px;
        overflow: hidden;
        z-index: 5;
    }
    svg {
        z-index: 5;
    }
    .ActualImage{
        position: absolute;
        top: 8.2%;
        left: 4.5%;
        width: 91.8%;
    }
</style>
