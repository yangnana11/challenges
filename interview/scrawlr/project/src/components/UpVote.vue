<template>
  <button @click="changeStatus(myid)">{{ status[myid] }}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ["myid"],
  computed: mapGetters([
    'status'
  ]),
  methods: mapActions([
    'changeStatus'
  ])
}
</script>
