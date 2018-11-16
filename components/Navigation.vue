<template>
    <div>
        <!-- <h2
            class="title is-4"
            v-for="(post, index) in posts"
              :key="index">
            <nuxt-link :to="post.fields.slug">
              {{ post.fields.title }}
            </nuxt-link>
          </h2> -->
    <section class="columns">
      <ol class="main-nav column">
        <li><nuxt-link exact to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/seura">Seura</nuxt-link></li>
        <li><nuxt-link to="/frigidaire">Frigidaire</nuxt-link></li>
      </ol>
    </section>

    <!--we use the page to update the class with a conditional-->
    <p><strong>{{page}}</strong></p>
    
    <svg :class="{ 'active' : (page === 'slug') }" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 447 442">
      <!-- we use the transition group component, we need a g tag because it’s SVG-->
      <transition-group name="list" tag="g">
        <rect class="items rect" ref="rect" key="rect" width="171" height="171"/>
        <circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
        <g class="items text" id="text" key="text">
          <rect x="56" y="225" width="226" height="16"/>
          <rect x="56" y="252" width="226" height="16"/>
          <rect x="56" y="280" width="226" height="16"/>
        </g>
        <rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
      </transition-group>
    </svg>

    </div>
</template>


<script>
import { mapState } from 'vuex'
import client from '~/plugins/contentful';

export default {
    computed: mapState(['page']),
    //props: ["posts"]
};
</script>
