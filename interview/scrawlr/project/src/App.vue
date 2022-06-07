<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <div class="g-wrap">
      <div class="g-container">
        <div v-for="(item, index) in children1" :key="index">
          <UpVote :ref="'element'+index" @click.prevent="test()" :myid="0"/>
        </div>
      </div>      
      <button @click="addComponent1()" class="add"></button>
    </div>
    <div class="g-wrap">
      <div class="g-container">
        <div v-for="(item, index) in children2" :key="index">
          <UpVote :ref="'element'+index" @click.prevent="test()" :myid="1"/>
        </div>
      </div>
      <button @click="addComponent2()" class="add"></button>
    </div>
    <div class="g-wrap">
      <div class="g-container">
        <div v-for="(item, index) in children3" :key="index">
          <UpVote :ref="'element'+index" @click.prevent="test()" :myid="2"/>
        </div>
      </div>
      <button @click="addComponent3()" class="add"></button>
    </div>
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
    },
    test() {
      console.log("Test");
      console.log(this.children1);
    }
  }
}
</script>
