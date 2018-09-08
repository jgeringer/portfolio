<template>
    <div class="Mobile">
        <img class="Skin" src="/content/device-tablet.svg" alt="Tablet device">
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
        width: 760px;
        position: relative;
    }
    .Skin{
        width: 100%;
        position: absolute;
    }
    .ActualImage{
        padding: 17% 11px 12px 12px;
    }
</style>
