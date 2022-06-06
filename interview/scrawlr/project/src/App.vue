<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <UpVote msg="Hello Vue 3.0 + Vite" /> -->
  <component
     v-for="(item,index) in children"
     :is="item"
     :key="index"
    ></component>
    <button @click="addComponent()">Add</button>
</template>

<script>
import UpVote from './components/UpVote.vue'

export default {
  name: 'App',
  data() {
    return {
      children: []
    }
  },
  components: {
    UpVote
  },
  methods: {
    addComponent() {
      this.children.push(UpVote)
    }
  }
}
</script>
