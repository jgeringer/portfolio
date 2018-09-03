<template>
  <section class="section">

    <a :href="post.fields.url" v-text="post.fields.heroButtonText" target="_blank" class="Button"></a>
    <transition name="fade">
      <img class="HeroImage" v-on:load="onLoaded" v-show="loaded" v-if="post.fields.heroImage" :src="post.fields.heroImage.fields.file.url">
    </transition>
    <div class="content" v-html="$md.render(post.fields.description)"></div>

    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          
          <p class="subtitle is-6">
            <nuxt-link to="/">&laquo; Home</nuxt-link>
          </p>

          <h1 class="title is-2">
            Title: {{ post.fields.title }}
          </h1>

          <hr />

          <section 
              v-for="(callout, index) in postCallouts"
              :key="index">
            <h2>
              {{ callout.fields.title }}
            </h2>
            <img :src="callout.fields.image.fields.file.url" />
            <div v-html="$md.render(callout.fields.description)"></div>
          </section>

          <hr />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  data() {
    return{
      loaded: false,
      postCallouts: []
    }
  },
  methods: {
    onLoaded(){
      this.loaded = true
    }
  },
  asyncData({ params, error, payload }) {
    if (payload) return { 
      post: payload,
      postCallouts: payload.fields.callouts
    };

    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug,
      })
      .then(entries => {
        console.warn('entries: ', entries)
        return { 
          post: entries.items[0],
          postCallouts: entries.items[0].fields.callouts
        };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      title: this.post.fields.title,
    };
  },
};
</script>