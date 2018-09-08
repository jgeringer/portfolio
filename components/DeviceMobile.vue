<template>
    <div class="Mobile">
        <img class="Skin" src="/content/device-mobile.svg" alt="Mobile device">
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
        width: 300px;
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
