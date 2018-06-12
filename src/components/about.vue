<template>
  <v-container
    class="fluid px-0"
  >
    <v-layout column>
      <v-flex xs12 text-xs-center>
        <v-flex xs10 offset-xs1 class="pb-3">
          <v-avatar
            size="200px"
            color="grey lighten-4"
          >
            <img src="https://avatars1.githubusercontent.com/u/2455106?s=400" alt="avatar">
          </v-avatar>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-3>
      <v-flex xs10 offset-xs1>
        <div class="about" >
          I'm a Software Engineer based in Chennai, India. <br>
          I enjoy building simple solutions to complex problems. Some of key areas of expertise include but not limited to are below
        </div>
        <div class="about" style="margin: 10px 0px; padding: 0px 20px;">
          <ul class="grey--text">
            <li> Architecture building </li>
            <li> Machine learning (Deep Learning) </li>
            <li> NLP (word vectors, custom model building) </li>
            <li> Scaling Infrastructure </li>
          </ul>
        </div>
        <div>
          My github can be found <a href="https://github.com/nareshganesan"> here </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
  name: 'Article',
  created () {
  },
  mounted () {
    // console.log(this.$route.params)
  },
  data: () => ({
    show: false,
    article: {
      title: 'Lorum ipsum title'
    }
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

.about {
  font-size: 20px;
  font-weight: 400;
}

</style>