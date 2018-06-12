<template>
  <!-- do not leave space in the value field for text area -->
  <textarea :i="i" class="autosize body-1" :name="name" :id="i" :rows="rows" :placeholder="placeholder" @blur="onBlur($event)" @keyup="updated($event)">{{value}}</textarea>
</template>

<script>
import autosize from 'autosize'
export default {
  props: {
    i: {
      type: String
    },
    rows: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'text area content'
    },
    name: {
      type: String
    },
    id: {
      type: String
    }
  },
  mounted: function () {
    autosize(this.$el)
  },
  methods: {
    updated (event) {
      this.$emit('updated', {
        id: event.target.id,
        name: event.target.name,
        value: event.target.value
      })
    },
    onBlur (event) {
      this.$emit('onBlur')
    }
  }
}
</script>
<style>
.autosize {
  padding: 10px;
  height: 100%;
  max-height: 500px;
}
</style>