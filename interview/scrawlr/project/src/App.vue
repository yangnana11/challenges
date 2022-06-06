<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <UpVote msg="Hello Vue 3.0 + Vite" /> -->
  <component
     v-for="(item,index) in children1"
     :is="item"
     :key="index"
    ></component>
    <button @click="addComponent1()">Add</button>
    <component
     v-for="(item,index) in children2"
     :is="item"
     :key="index"
    ></component>
    <button @click="addComponent2()">Add</button>
    <component
     v-for="(item,index) in children3"
     :is="item"
     :key="index"
    ></component>
    <button @click="addComponent3()">Add</button>
</template>

<script>
import UpVote from './components/UpVote.vue'

export default {
  name: 'App',
  data() {
    return {
      children1: [],
      children2:[],
      children3:[]
    }
  },
  components: {
    UpVote
  },
  methods: {
    addComponent1() {
      this.children1.push(UpVote)
    },
    addComponent2() {
      this.children2.push(UpVote)
    },
    addComponent3() {
      this.children3.push(UpVote)
    }
  }
}
</script>
