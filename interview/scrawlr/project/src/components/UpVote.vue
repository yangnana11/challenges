<template>
  <button class="item" :class="status[myid]=='selected'?'selected':'normal'" @click="changeStatus(myid)"></button>
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
