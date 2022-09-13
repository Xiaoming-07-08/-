<template>
  <div class="content">
    <span class="title">诗词汇</span>
    <span class="subtitle">领略诗词之美</span>
    <p class="description">-- {{ randomPoem.content }} --</p>
    <p class="action">
      <router-link class="letsgo" to="/poem"
        >走进诗词世界<span class="iconfont icon-jiantou_xiangyou"></span
      ></router-link>
    </p>
  </div>
</template>

<script setup>
import { getPoemList } from "../service/index";
import { reactive, onMounted, computed, ref, onUnmounted, provide } from "vue";
let data = reactive({
  poemList: [],
});

const AppgetPoemList = async () => {
  data.poemList = await getPoemList();
};

onMounted(() => {
  AppgetPoemList();
});

let randomNum = ref(0);
const timer = setInterval(() => {
  randomNum.value = Math.floor(Math.random() * data.poemList.length);
}, 3000);

let randomPoem = computed(() => {
  return data.poemList[randomNum.value] || {};
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
li {
  font-size: 20px;
  margin: 10px 0;
}

.title {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 72px;
  font-weight: 700;
}
.subtitle {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.25;
  color: #213547;
}
.title,
.subtitle {
  display: block;
}
.content {
  width: 80%;
  margin: 5% auto;
  text-align: center;
}
.description {
  font-size: 18px;
  margin-bottom: 48px;
  max-width: 960px;
  line-height: 1.5;
  color: #676767;
  margin: 24px auto 40px;
}
.letsgo {
  font-size: 16px;
  display: inline-block;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
  position: relative;
  font-weight: 600;
  background-color: #42b883;
  color: #fff;
  margin-right: 18px;
  padding: 8px 1em;
  text-decoration: none;
  box-sizing: border-box;
}
.letsgo:hover {
  background-color: #33a06f;
}
.letsgo:hover .icon-jiantou_xiangyou {
  padding-left: 5px;
}
</style>