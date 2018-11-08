<template>
    <div>
        <h2
            class="title is-4"
            v-for="(post, index) in posts"
              :key="index">
            <nuxt-link :to="post.fields.slug">
              {{ post.fields.title }}
            </nuxt-link>
          </h2>
    </div>
</template>


<script>
import client from '~/plugins/contentful';

export default {
    props: ["posts"]
};
</script>
