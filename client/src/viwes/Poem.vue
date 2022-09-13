<template>
  <div>
    <ul>
      <li v-for="p in data.poemList" :key="p.id">
        <div class="poet">{{ p.poet }}--{{ p.dynasty }}</div>
        <div class="content">{{ p.content }}</div>
        <div class="article" v-if="p.article">&lt&lt{{ p.article }}&gt&gt</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref, onUnmounted, provide } from "vue";
import { getPoemList } from "../service/index";
let data = reactive({
  poemList: [],
});

const AppgetPoemList = async () => {
  data.poemList = await getPoemList();
  console.log(data.poemList);
};

onMounted(() => {
  AppgetPoemList();
});
</script>

<style scoped>
ul {
  width: 60%;
  height: 60%;
  margin: 5% auto;
  text-align: center;
}
li {
  margin: 40px 0;
}
</style>