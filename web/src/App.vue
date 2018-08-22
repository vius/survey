<template>
  <div id="app">
    <Progress v-if='page.length' :percent="parseInt((index/page.length)*100)" status="active"/>
    <div v-if='page.length && !showResult'>
      <div class='title'>{{page[index].title}}</div>
      <div v-for="(item,serial) in page[index].list" :key='item.id'>
        <Question
        :question='item'
        :last='serial == page[index].list.length-1'
        @addAnswer="addAnswer">
        </Question>
      </div>
      <Button type="primary" size="large" @click='next'>
        <span v-if='!last'>Next</span>
        <span v-if='last'>Submit</span>
      </Button>
    </div>
    <div v-if='showResult' class='result'>
      This is your MTurk code: {{answer.userID}}. Thanks :)
    </div>
    <Spin size="large" v-if='page.length==0' class='spin'></Spin>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Question from "./components/question.vue";
export default {
  name: "app",
  components: {
    Question
  },
  data: function() {
    return {
      index: 0,
      last: false,
      splice: 0,
      logic_idx: [],
      page: [],
      otherScore: 0,
      answer: {
        random: "",
        userID: "",
        score: 0,
        list: []
      },
      showResult: false
    };
  },
  mounted: function() {
    /**
     * random 随机生成 0、1、2、3  对应四套题库的索引值
     */
    this.getQuestion();
  },
  methods: {
    getQuestion: function() {
      let random = parseInt(Math.random() * 4);
      let random1 = parseInt(Math.random() * 3);
      this.answer.random = [random, random1];
      this.$axios
        .get("/api/getJson")
        .then(data => {
          if (typeof data === "string") {
            data = JSON.parse(data);
          }
          data = data.data;
          let q = data.questions_all[random][random1];
          let page = [];
          let index = 0;
          let json = {
            title: "Human Robot Trust Experiment",
            list: []
          };
          q.forEach((item, index1) => {
            if (item.q.type !== 5) {
              json.list.push(item);
            } else {
              if (json.list.length) {
                page[index] = json;
                index++;
              }
              json = {
                title: item.q.title,
                list: []
              };
            }
          });
          this.page = page;
          this.logic_idx = data.logic_idx;
        })
        .catch(() => {
          this.$Message.error({
            content: "get question failed"
          });
        });
    },
    addAnswer: function(answer) {
      let exist = false;
      this.answer.list.forEach((item, index) => {
        if (item.id == answer.id) {
          this.answer.list[index] = answer;
          exist = true;
        }
      });
      if (!exist) {
        this.answer.list.push(answer);
      }
    },
    next: function() {
      /**
       * 校验答案是否和可回答题目数一致
       */
      let res = this.checkAnswer();
      if (!res.result) {
        this.$Message.error({
          content: res.msg
        });
        return;
      }
      this.getOtherScore();
      if (this.last) {
        /**
         * 提交操作
         */
        this.getAllScore();
        this.submit();
      } else {
        let idx = this.logic_idx;
        let that = this;
        let answer = this.answer.list.slice(this.splice);
        answer.forEach((item, index) => {
          let id = parseInt(item.id.split("_")[2]);
          let exist = idx.indexOf(id) > -1;
          if (exist) {
            this.splice += index + 1;
            if (item.value != 0) {
              this.page[this.index + 1].hide = true;
            } else {
              this.page[this.index + 2].hide = true;
            }
          }
        });
        this.index++;
        if (this.page[this.index].hide) {
          this.index++;
        }
        if (
          this.index == this.page.length - 1 ||
          (this.index == this.page.length - 2 && this.page[this.index + 1].hide)
        ) {
          this.last = true;
        }
        this.$nextTick(function() {
          console.log(this.page[this.index], this.index);
          window.scrollTo(0, 0);
        });
      }
    },
    checkAnswer: function() {
      let res;
      let length = this.answer.list.length;
      let topicLength = 0;
      this.page.forEach((item, index) => {
        if (index <= this.index) {
          if (!item.hide) {
            item.list.forEach(child => {
              let type = child.q.type;
              if (type == 1 || type == 2 || type == 3) {
                topicLength++;
              }
            });
          }
        }
      });
      if (length == topicLength) {
        let wrong = this.answer.list.some(item => {
          return item.score == -1;
        });
        if (wrong) {
          res = {
            result: false,
            msg: "Please read carefully and chooseagain"
          };
        } else {
          res = {
            result: true
          };
        }
      } else {
        res = {
          result: false,
          msg: "Please answer all questions!"
        };
      }
      return res;
    },
    getAllScore: function() {
      let list = this.answer.list;
      list.forEach(item => {
        if (item.score !== "null") {
          this.answer.score += item.score;
        }
      });
    },
    getOtherScore: function() {
      //将描述题 type==0 or type == 4的所得分加进来
      let index = this.index;
      let page = this.page;
      let list = page[index].list;
      list.forEach(item => {
        if (item.q.type == 0 || item.q.type == 4) {
          if (item.score) {
            let type = Object.prototype.toString
              .call(item.score)
              .slice(8, -1)
              .toLowerCase();
            if (type == "string" || type == "number") {
              this.answer.score += item.score;
            } else {
              console.error("查看下score数据结构");
            }
          }
        }
      });
    },
    submit: function() {
      let id = new Date().getTime().toString();
      let data = Object.assign(this.answer, {
        userID: id.slice(1)
      });
      this.$axios
        .post("/api/submit", data)
        .then(() => {
          this.$Message.success({
            content: "submit success"
          });
          this.showResult = true;
        })
        .catch(() => {
          this.showResult = true;
          this.$Message.error({
            content: "submit failed"
          });
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  height: 100%;
  .ivu-progress.ivu-progress-active {
    margin-bottom: 15px;
    .ivu-progress-inner {
      border-radius: 4px;
      .ivu-progress-bg {
        height: 16px !important;
        border-radius: 4px;
      }
    }
    .ivu-progress-outer {
      padding-right: 45px;
      margin-right: -45px;
    }
  }
  .result {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 80%;
  }
  .spin {
    position: absolute;
    top: 49%;
    left: 49%;
  }
  .title {
    color: #43464d;
    font-size: 26px;
    text-align: center;
    font-weight: 500;
  }
  .ivu-back-top-inner {
    background-color: #2d8cf0;
  }
}
@media (min-width: 770px) {
  #app {
    width: 770px;
    max-width: 95%;
    padding-bottom: 30px;
    button {
      margin-top: 25px;
      float: right;
      margin-bottom: 30px;
    }
  }
}
</style>
