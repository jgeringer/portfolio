<template>
    <article>
      <h1 v-html="$md.render(resume.fields.title)"></h1>
      <h2 v-html="$md.render(resume.fields.message)"></h2>
    </article>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { 
      resume: payload
    }

    return client
      .getEntries({
        content_type: 'resume',
        order: '-sys.createdAt',
      })
      .then(entries => {
        console.warn('resume entries: ', entries)
        return {
          resume: entries.items[0]
        };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: 'Resume',
  },
}
</script>