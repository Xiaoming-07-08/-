<template>
  <div class="my-header">
    <router-link to="/">LOGO</router-link>
    <a-button type="primary" @click="showModal">add</a-button>
    <a-modal v-model:visible="visible" title="新增诗句" @ok="handleOk">
      <p>诗人:<a-input v-model:value="poetValue" placeholder="李益" /></p>
      <p>
        诗句:<a-input
          v-model:value="contentValue"
          placeholder="我见众生皆草木，唯有见你是青山"
        />
      </p>
      <p>
        出自:<a-input v-model:value="articleValue" placeholder="大乘玄论" />
      </p>
      <p>
        类型:
        <a-select
          v-model:value="TypeValue"
          :options="optionsType"
          mode="tags"
          placeholder="爱情"
          style="width: 250px"
        ></a-select>
      </p>
      <p>
        朝代:
        <a-select
          v-model:value="DynastyValue"
          show-search
          placeholder="Select a person"
          style="width: 200px"
          :options="optionsDynasty"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        ></a-select>
      </p>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { addPoem } from "../service";

const visible = ref(false);
let poetValue = ref("诗人");
let contentValue = ref("");
let articleValue = ref("");

let TypeValue = ref([]);
const optionsType = ref([
  { value: "相思", label: "相思" },
  { value: "爱情", label: "爱情" },
  { value: "壮志", label: "壮志" },
]);

let DynastyValue = ref([]);
const optionsDynasty = ref([
  { value: "唐代", label: "唐代" },
  { value: "宋代", label: "宋代" },
  { value: "元代", label: "元代" },
  { value: "明代", label: "明代" },
  { value: "清代", label: "清代" },
]);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
  let obj = {
    poet: poetValue.value,
    content: contentValue.value,
    article: articleValue.value,
    type: TypeValue.value,
    dynasty: DynastyValue.value,
  };
  addPoem(obj).then((data) => {
    console.log(data);
  });
};
</script>

<style scoped>
.my-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px 0px 5px 5px #efefef;
  color: #000;
  padding: 0 60px;
  box-sizing: border-box;
}
.ant-input {
  width: 250px;
  margin-left: 10px;
}
.ant-select {
  margin-left: 7px;
}
</style>