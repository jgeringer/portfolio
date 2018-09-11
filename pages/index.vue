<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h2>Work</h2>
          <hr />
          <h2
            class="title is-4"
            v-for="(post, index) in posts"
              :key="index">
            <nuxt-link :to="post.fields.slug">
              {{ post.fields.title }}
            </nuxt-link>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  async asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
      .then(entries => {
        console.warn('index entries: ', entries)
        return { posts: entries.items };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: 'Latest Posts',
  },
};
</script>

<style lang="scss" scoped>
  h4 {
      font-size: 42px;
      color: $colorLight;
  }
</style>
