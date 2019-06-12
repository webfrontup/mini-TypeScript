<template>
  <div class="about">
    <p 
    v-for="(item,index) in list" 
    :key="index"
    :style="{textDecoration: item.complete? 'line-through':''}"
    >{{item.text}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
@Component({
  name: 'Show',
})
export default class Show extends Vue {
  @State('todoList') public list;

}
</script>

