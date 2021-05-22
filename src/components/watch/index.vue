<template>
  <div>
    <a target='_blank' href="https://cn.vuejs.org/v2/guide/computed.html">watch</a>
    <div id='watch-example'>
      <p>
        ask a yes/no question:
        <input type="text" v-model="question">
      </p>
      <p :class="[isActive && 'active']">{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'lodash/debounce'
import capitalize from 'lodash/capitalize'

export default {
  data() {
    return {
      isActive: false,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    question(val, old) {
      // console.log(val, old, '-----val');
      this.answer = 'Waiting for you to stop typing...';
      this.debounceGetAnswer()
    }
  },
  created() {
    this.debounceGetAnswer = debounce(this.getAnswer, 500)
  },

  methods: {
    async getAnswer() {
      console.log(333);
      if(this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return;
      }
      this.answer = 'think...'
      try {
        let res = await axios.get('https://yesno.wtf/api')
        console.log(res, '------res');
        this.answer = capitalize(res.data.answer)
      } catch (error) {
        console.log('error: ', error);
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .active {
    color: red;
  }
</style>