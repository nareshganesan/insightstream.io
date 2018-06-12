<template>
  <v-container
    class="fluid px-0"
  >
    <v-layout column>
      <v-flex xs12>
        <v-flex xs10 offset-xs1 class="pb-3">
          <div id="editor">
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-tabs
          slot="extension"
          v-model="tab"
          color="white"
          grow
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-flex>
      <v-flex xs10 offset-xs1>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card flat v-if="item === 'write'">
              <v-card-text>
                <autosize-text
                  i="60"
                  name="title"
                  id="title"
                  style="float: left; width: 98%;"
                  :value="article.title"
                  placeholder="Title"
                  @updated="autosizeTextUpdate"
                ></autosize-text>
                <autosize-text
                  i="60"
                  name="tags"
                  id="tags"
                  style="float: left; width: 98%;"
                  :value="article.tags"
                  placeholder="Tags"
                  @updated="autosizeTextUpdate"
                ></autosize-text>
                <autosize-text
                  i="60"
                  name="body"
                  id="body"
                  style="float: left; width: 98%;"
                  :value="article.body"
                  placeholder="Body"
                  rows="60"
                  @updated="autosizeTextUpdate"
                ></autosize-text>
              </v-card-text>
            </v-card>
            <v-card flat v-if="item === 'preview'">
              <v-card-text>
                <div v-html="titleMarkdown"></div>
              </v-card-text>
              <v-card-text>
                <div v-html="tagsMarkdown"></div>
              </v-card-text>
              <v-card-text>
                <div class="markdown" v-html="bodyMarkdown"></div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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
      title: '',
      body: '',
      tags: ''
    },
    tab: null,
    items: [
      'write', 'preview'
    ]
  }),
  computed: {
    titleMarkdown: function () {
      return window.marked(
        this.article.title,
        { sanitize: true }
      )
    },
    tagsMarkdown: function () {
      return window.marked(
        this.article.tags,
        { sanitize: true }
      )
    },
    bodyMarkdown: function () {
      // console.log(window.marked(this.article.body, { sanitize: true }))
      return window.marked(this.article.body, { sanitize: true })
    }
  },
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    },
    update: window._.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    autosizeTextUpdate (event) {
      if (event.name === 'body') {
        this.article.body = event.value
      }
      if (event.name === 'title') {
        this.article.title = event.value
      }
      if (event.name === 'tags') {
        this.article.tags = event.value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.autosize {
  padding: 15px;
}



</style>