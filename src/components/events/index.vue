<template>
  <!-- .self只有点击自己才出发，冒泡来的不触发 -->
  <!-- <div class="box" @click.self="outerClick"> -->
  <div>
    <div class="box" @click.self.prevent="outerClick">
      <div class="middle" @click="middleClick">
        <!-- .stop阻止冒泡 -->
        <!-- <div class="inner" @click.stop='innerClick'></div> -->
        <!-- <div class="inner" @click.once='innerClick'></div> -->

        <!-- 如果box和middle带有capture修饰符，则同样会触发它们的点击事件 -->
        <!-- <div class="inner" @click.stop.prevent='innerClick'></div> -->
        <div class="inner" @click="innerClick"></div>

        <!-- .once修饰符和其他修饰符不一样，该修饰符可以用在组件上，但是还需配合.native使用 -->
        <Item title="tom" @click.once.native="testClick" />
      </div>
    </div>

    <h3>按键修饰符</h3>
    <!-- <input type="text" @keyup.enter="submit"> -->
    <!-- <input type="text" @keyup.up="submit"> -->
    <!-- <input type="text" @keyup.13="submit"> -->

    <!-- 虽然出现警告但是生效了 -->
    <!-- <input type="text" @keyup.vv="submit"> -->
   <!-- 虽然出现警告但是生效了 -->
    <!-- <input type="text" @keyup.cams-down="submit"> -->
    <!-- <input type="text" @keyup.media-play-pauses="submit"> -->

    <!-- <input type="text" @keyup.alt.67="submit"> -->
    <input type="text" @click.alt="submit">

    <!-- <button v-on:click.meta.exact="submit">A</button> -->

    <!-- 没有任何 *系统修饰符(.mata .ctrl .alt .shift)* 按下才触发，按下其他键时比如数字键也会触发 -->
    <button v-on:click.exact="submit">A</button>
  </div>
</template>

<script>
// 对组件使用.once修饰符
import Item from "../watch/item";

export default {
  components: {
    Item,
  },
  methods: {
    submit(e) {
      console.log(e);
      console.log(e.target.value);
    },

    testClick() {
      console.log(4444);
    },
    outerClick() {
      console.log("-----outerClick");
    },
    middleClick() {
      console.log("-------middleClick");
    },
    innerClick() {
      console.log("-----innerClick");
    },
  },
};
</script>

<style>
.box {
  cursor: pointer;
  width: 300px;
  height: 300px;
  border: 1px solid saddlebrown;
}
.middle {
  width: 180px;
  height: 180px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid hotpink;
}
.inner {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid blue;
}
</style>