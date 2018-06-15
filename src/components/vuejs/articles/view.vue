<template>
  <v-container
    class="fluid px-0"
  >
    <v-layout column>
      <v-flex xs12>
        <v-flex xs10 offset-xs1 class="pb-3">
          <div class="display-2"> {{article.title}} </div>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-for="(item, idx) in article.items" :key="idx" my-3>
      <v-flex
        v-bind="{ [`xs${item.flex}`]: true, [`offset-xs${item.offset}`]: true }"
        v-html="item.template">
        {{item.template}}
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
      title: 'Lorum ipsum title',
      items: [
        {
          template: "<div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/900x300' style='width: 100%; height: 100%'/>",
          flex: 12,
          offset: 0
        },
        {
          template: "<div class='title'> <b> 1. Subheading </b> </div> <br> <div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/600x300' style='width: 100%; height: 100%'/>",
          flex: 10,
          offset: 1
        },
        {
          template: "<div class='title'> <b> 2. Subheading </b> </div> <br> <div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/400x100' style='width: 100%; height: 100%'/>",
          flex: 10,
          offset: 1
        }
      ]
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

</style>