<template>
  <v-layout column>
    <v-flex xs12 sm6 v-if="!isList" >
      <v-card>
        <grid-cards></grid-cards>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 v-else>
      <v-card>
        <list-cards></list-cards>
      </v-card>
    </v-flex>

  </v-layout>
</template>
<script>

export default {
  name: 'Topics',
  created () {
    window.bus.$on('emitListView', (args) => {
      this.isList = args.isList
    })
  },
  data: () => ({
    show: false,
    isList: false
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
`