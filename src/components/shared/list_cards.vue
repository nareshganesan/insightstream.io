<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <template v-for="(card, idx) in cards">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card elevation-3>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex
                  xs2
                  @click.stop="toRoute('vuejs_view_article', {id: card.id})"
                  style="cursor: pointer"
                >
                  <v-card-media
                    :src="card.src"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs10>
                  <div>
                    <div
                      class="title"
                      @click.stop="toRoute('vuejs_view_article', {id: card.id})"
                      style="cursor: pointer"
                    >
                      {{card.title}}
                      <span style="margin-left: 20px;">
                        <v-btn
                          flat
                          icon
                          color="primary darken-2"
                          style="margin-left: -8px;"
                        >
                          <v-icon small>thumb_up</v-icon>
                        </v-btn>
                        <v-btn flat icon color="red darken-2">
                          <v-icon small>thumb_down</v-icon>
                        </v-btn>
                      </span>
                      <span style="float:right;" class="caption grey--text"> {{card.created}} </span>
                    </div>
                    <div class="body-1">
                      <span v-if="card.subtitle.length > 140" class="grey--text">
                        {{card.subtitle.substring(0, 140)}}... &nbsp;&nbsp;
                        <a href="#">read more</a>
                      </span>
                      <span v-else class="grey--text">
                        {{card.subtitle}} &nbsp;&nbsp;
                      </span>
                    </div>
                    <div>
                      <v-container fluid v-if="card.topics && card.topics.length > 0">
                        <v-layout row wrap>
                          <v-flex xs12 style="margin-left: -15px;">
                            <template v-for="(topic, index) in card.topics">
                              <span> <a href="">{{topic}}</a> &nbsp; </span>
                            </template>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'ListCards',
  created () {
  },
  data: () => ({
    cards: [
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I', 'distributed systems'],
        id: 1
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 2
      },
      {
        meta: 'Best airlines',
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out? Some more content for testing list layout",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning'],
        id: 3
      },
      {
        meta: 'Pre-fab homes',
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 5
      },
      {
        meta: 'Favorite road trips',
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 6
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        flex: 4,
        created: '15 min',
        topics: ['deep learning', 'machine learning', 'A.I'],
        id: 7
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        flex: 4,
        created: '15 min',
        topics: [],
        id: 8
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        flex: 4,
        created: '15 min',
        id: 9
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        flex: 4,
        created: '15 min',
        id: 10
      },
      {
        title: 'Pre-fab homes',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        flex: 4,
        created: '15 min',
        id: 11
      },
      {
        title: 'Favorite road trips',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
        flex: 4,
        created: '15 min',
        id: 12
      },
      {
        title: 'Best airlines',
        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
        flex: 4,
        created: '15 min',
        id: 13
      }
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