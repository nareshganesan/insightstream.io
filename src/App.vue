<template>
  <v-app
    id="inspire"
    style="background-color: #ffffff !important;"
  >
    <v-navigation-drawer
    dark
    app
    floating
    v-model="drawer"
    >
    <v-container grid-list-sm>
      <v-layout row justify-center align-center>
        <v-flex xs12>
          <v-card flat>
            <v-card-title flat>
              <v-container grid-list-sm>
                <v-layout row wrap>
                  <v-flex xs12
                    align-center justify-center text-xs-center
                  >
                    <v-avatar
                      tile="tile"
                      size="75"
                    >
                      <img src="./assets/logo_only.png" alt="avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex xs12
                    align-center justify-center text-xs-center
                    headline
                  >
                      <div @click.stop="toRoute('home')">
                        InsightStream.io
                      </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-list>
    <template  >
      <v-list-tile v-for="(item, i) in items" :key="i"  >
        <v-list-tile-action @click.stop="toRoute(item.link)">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content @click.stop="toRoute(item.link)">
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="item.add">
            <v-tooltip right>
              <v-icon dark color="primary" @click.stop="toRoute(item.add)" slot="activator">add</v-icon>
               <span>{{item.ttip}}</span>
            </v-tooltip>
        </v-list-tile-action>
      </v-list-tile>
    </template>
    <v-spacer></v-spacer>
    <v-list-tile >
      <v-list-tile-action>
        <v-icon>copyright</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          Copyright {{ year }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed dark class="primary">
    <v-toolbar-side-icon dark @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
    <v-toolbar-title class="mr-5 align-center">
      <span @click.stop="toRoute('home')"> InsightStream.io </span>
    </v-toolbar-title>
    <v-layout row justify-center>
      <v-flex xs12 sm10 style="max-width: 750px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          dark
          hide-details
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn dark icon v-if="isList" @click.stop="listView()">
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn dark icon v-else @click.stop="listView()">
      <v-icon>view_list</v-icon>
    </v-btn>
  </v-toolbar>

  <v-content class="px-0">
    <v-container fluid fill-height class="px-0">
      <v-layout row wrap>
        <v-flex xs12>
          <router-view>
          </router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

  </v-app>
</template>


<script>
  export default {
    created () {
      this.$store.dispatch('checkAuth')
    },
    data: () => ({
      fav: true,
      menu: true,
      message: false,
      hints: true,
      fixed: true,
      drawer: false,
      theme: false,
      isList: false
    }),
    props: {
      source: String
    },
    computed: {
      items () {
        let menu = [
          { icon: 'dashboard', text: 'Home', link: 'home', add: 'vuejs_create_article', ttip: 'Add Article' },
          { icon: 'book', text: 'Topics', link: 'vuejs_topics' },
          { icon: 'person', text: 'About', link: 'about' }
        ]
        return menu
      },
      year () {
        return new Date().getFullYear()
      }
    },
    methods: {
      toRoute (rname, rparams = {}, query = {}) {
        this.dialog = true
        this.$router.push({name: rname, params: rparams, query: query})
      },
      listView () {
        this.isList = !this.isList
        var eventName = 'emitListView'
        window.bus.$emit(eventName, {
          isList: this.isList
        })
      }
    }
  }
</script>

<style>
.article-content {
  font-size: 21px !important;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.80px;
  line-height: 35px;
}
.markdown {
  box-sizing: border-box;
  margin: 15px;
  outline: none;
  font-family: inherit;
  font-size: 18px;
  white-space: normal;
  word-wrap: break-word;
}

.markdown code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}

.code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}
</style>