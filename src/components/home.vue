<template>
  <v-layout column>
    <v-flex xs10 offset-xs1 >
      <ul>
        <li
          class="article lighten--text"
          style="list-style-type: none;"
          v-for="(article, idx) in articles" :key="idx">
          <div class="title-font" @click="toRoute('vuejs_home')"> [{{article.created}}] {{article.title}} </div>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  name: 'Home',
  created () {
  },
  data: () => ({
    show: false,
    isList: false,
    articles: [
      {title: 'Vuejs 2 + vuetifyjs content sharing template', created: 'June 18\'', link: 'vuejs_home'}
    ]
  }),
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Archivo,Work+Sans,Playfair+Display')

.article {
  /*font-family: 'Archivo', sans-serif, Helvetica;*/
  list-style-type: none;
  font-size: 18px !important;
  font-weight: 400;
  cursor: pointer;
}

.title-font {
  /*Google fonts: Archivo*/
  font-size: 18px !important;
  font-weight: 400;
  cursor: pointer;
  color: grey;
}

.content-font {
  /*Google fonts: Work Sans*/
}

.note-font {
  /*Google fonts: playfair display*/
}

</style>
`