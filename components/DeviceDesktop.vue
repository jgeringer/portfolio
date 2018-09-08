<template>
    <div class="Desktop">
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
        width: 300px;
        padding-top: 30px;
        &:before{
                content: '';
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                height: 16px;
                background-image: url(/content/device-desktop.svg);
                background-repeat: no-repeat;
                display: block;
                /* background-color: red; */
                /* float: left; */
                /* display: block; */
                background-position: left top;
                background-size: 100% 21PX;
        }
        background-repeat: no-repeat;
        background-position: top center;
    }
    .Skin{
        width: 300px;
        position: absolute;
    }
    .ActualImage{
        //padding: 11px 0px 0 0px;
    }
</style>
