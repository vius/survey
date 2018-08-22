<template>
  <div class="question"
    v-bind:class="{'noBoderBottom': (last || question.q.type==0 || question.q.type==4),'desc': question.q.type==0}">
    <div class="topic">{{question.q.title}}</div>
    <div class="options"
      v-if='question.q.type==1'>
      <div class='survey-radio'
      v-for='(item,index) in question.q.choices'
      v-bind:class="{ actived: index == active }"
      @click='setActive(index)'>{{item}}</div>
    </div>
    <div class="options" v-if='question.q.type==2'>
      <div v-for='(item,index) in question.q.choices'>
        <div class='sub-title'>{{item}}</div>
        <Slider @on-change='slideChange(index)' v-model="slide[index]"></Slider>
      </div>
    </div>
    <div class="options" v-if='question.q.type==3'>
      <Input @on-change='input' v-model="question.answer" type="textarea" :rows="3" placeholder="Enter something..." />
    </div>
    <div class="options" v-if='question.q.type==4'>
      <div v-if="question.q.choices == 'prob1' ">
         <Table border :columns="prob1.columns" :data="prob1.data"></Table>
      </div>
      <div v-if="question.q.choices == 'prob2' ">
         <Table border :columns="prob2.columns" :data="prob2.data"></Table>
      </div>
      <div v-if='question.q.images == "general" || (question.q.choices && typeof question.q.choices !== "string")'>
        <Canvas :data='question.q' :id='question.id' :type='question.q.choices && question.q.choices[0]'></Canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from "./canvas.vue";

export default {
  name: "Question",
  props: {
    question: Object,
    last: Boolean
  },
  components: {
    Canvas
  },
  data: function() {
    let res = {
      typeMap: {
        "0": "描述题",
        "1": "选择题",
        "2": "滑动选择题",
        "3": "开放性问题",
        "4": "图像描述题"
      },
      prob1: {
        columns: [
          {
            title: "Barriers",
            key: "level"
          },
          {
            title: "Chance of going through",
            key: "percent"
          }
        ],
        data: [
          {
            level: "Easy",
            percent: "100%"
          },
          {
            level: "Miedium",
            percent: "83%"
          },
          {
            level: "Difficult",
            percent: "66%"
          }
        ]
      },
      prob2: {
        columns: [
          {
            title: "Barriers",
            key: "level"
          },
          {
            title: "Chance of going through",
            key: "percent"
          }
        ],
        data: [
          {
            level: "Easy",
            percent: "100%"
          },
          {
            level: "Miedium",
            percent: "83%"
          },
          {
            level: "Difficult",
            percent: "50%"
          }
        ]
      },
      slide:[],
      active:-1
    };
    return res;
  },
  methods: {
    setActive: function(index) {
      this.active = index;
      this.emitData(index, index);
    },
    emitData: function(index, val) {
      let temp = {
        value: val,
        id: this.question.id,
        score: this.getScore(index)
      };
      this.$emit("addAnswer", temp);
    },
    input: function(e) {
      this.emitData(0,this.question.answer);
    },
    getScore: function(index) {
      let score;
      let type = Object.prototype.toString
        .call(this.question.score)
        .slice(8, -1)
        .toLowerCase();
      if (type === "null") {
        score = "null";
      }
      if (type === "array") {
        score = this.question.score[index];
      }
      if (type === "string" || type === "number") {
        score = this.question.score;
      }
      return score;
    },
    slideChange: function(index) {
      let slideLen = this.slide.length;
      let answerLen = this.question.q.choices.length
      if (slideLen == answerLen || (index == answerLen - 1 && slideLen == answerLen -1 )) {
        this.emitData(0, this.slide);
      }
    }
  },
  mounted: function(){
  }
};
</script>

<style scoped lang='scss'>
.question {
  border-bottom: 2px solid #e7e7e9;
  padding: 24px 0;
  &.noBoderBottom {
    border-bottom: none;
  }
  &.desc {
    padding-bottom: 0;
  }
  .topic {
    font-size: 18px;
    color: #43464d;
    margin-bottom: 12px;
  }
  .options {
    .sub-title {
      font-size: 14px;
    }
    textarea.ivu-input {
      max-width: 450px!important;
    }
  }
}
</style>
