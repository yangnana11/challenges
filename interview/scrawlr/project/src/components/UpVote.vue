<template>
  <button @click="changeStatus">{{ status }}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'status'
  ]),
  methods: mapActions([
    'changeStatus'
  ])
}
</script>
