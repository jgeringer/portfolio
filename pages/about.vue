<template>
    <article>
      <h1 v-html="$md.render(about.fields.title)"></h1>
      <h2 v-html="$md.render(about.fields.message)"></h2>
    </article>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { 
      about: payload
    }

    return client
      .getEntries({
        content_type: 'about',
        order: '-sys.createdAt',
      })
      .then(entries => {
        console.warn('about entries: ', entries)
        return {
          about: entries.items[0]
        };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: 'About',
  },
}
</script>