<template>
  <Row class='canvas-box'>
    <Col span="24" v-if='table.show'>
      <table>
        <tr>
          <th>Barriers</th>
          <th>Difficulty Levels</th>
        </tr>
        <tr>
          <td>
            <span class='diff'>Ⅰ</span>
            <span class='level level1'>
            </span>
          </td>
          <td>Easy</td>
        </tr>
        <tr>
          <td>
            <span class='diff'>Ⅱ</span>
            <span class='level level2'></span>
          </td>
          <td>Miedium</td>
        </tr>
        <tr>
          <td>
            <span class='diff'>Ⅲ</span>
            <span class='level level3'>
              <em class='line'></em>
            </span>
          </td>
          <td>Difficult</td>
        </tr>
        <tr>
          <td>
            <em class='circle'>n</em>
          </td>
          <td>Number of people trapped here</td>
        </tr>
        </table>
    </Col>
    <Col span='24' v-if="type=='c'" class='roomName'>
      <span class='room1'>room1</span>
      <span class='room2'>room2</span>
    </Col>
    <Col span="24" class='canvas-container' v-bind:class="{ 'hasRoom1': type=='c','room1r': type=='room1r'}" v-if='!repair.show'>
      <div :id="'canvas' + id" class='canvas'></div>
    </Col>
    <Col span='24'
    v-bind:class="{ 'hasRoom1': type=='c'}"
    v-if="type!=='general' && type!=='room1r'  && type!=='repair'" class='robot'>
      <img src="../assets/robot0.png" v-if='!robot'>
      <img src="../assets/robot1.png" v-if='robot'>
    </Col>
    <Col span="24" class='repair' v-if='repair.show'>
      <img src="../assets/repair0.png" v-if='repair.index == 0'>
      <img src="../assets/repair1.png" v-if='repair.index == 1'>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Canvas",
  props: {
    data: Object,
    id: String,
    type: String
  },
  data: function() {
    let res = {
      bgColor: ["white", "yellow", "red"],
      attr: {
        font: '28px "宋体"',
        textAlign: "center",
        lineBreak: "normal"
      },
      choose: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACV0lEQVRoQ+2XvYvUQBjGn3edzd8gx2lnpb1YWIitoo2ix4FybibYia1gZ22pNzN7iIUfrIIoWNkKwoGdjYUgethdpRa3ybwSZSVKPnd35hLIQmAhk3ee3/PMO8kQOv6jjutHD7DfCfYJdD6BOIrWLfMtAlbI2mvCmGc+oRZaQnEYhkykZoIZ+BIodbgTAP+L/y2a+etQ60OtB8gVD4CsXRPGPG41QIHzTEAktNY+xadzNeqBQvHMV4UxD32LbwTQRvG1AdoqvhZAyZpfE1o/2Y9lk52ztAcKxCcErLdBfGkC0zB8AaJzHhz+BuB9ehHR9oHd3dc0mSR15y1MYCol1y2y1HHM2yJJLtHW1qc6ddsH8Ef1d7L2hjBmXAVRBvASwNmqAi7vM/P1QOv7ZXPM08TpW3dpOxCPRqsJ0XFLdD7dHP4Ry/xDWHuUxuPPRRCVb2Kf2+hUylMAHgE4+Fcw81uh9UkCcnuyEiAt5BUiik6D+U3Wcbb2RGDMu7wUagGUQjj4DtqT8gEBV2aCGbgZKHV3IQCfEHEYnmGiVxnBk6FSFxcG8AXBGxsrsRA7mT4oPCjVXkJZ+sKeGAwui83Np4turQxQLKXN1hkqlat1LoDCJICdoVKrnQDIhVjSmdhLAjOXYylHDNwD8JOAkVBq0pkEFhVa9LzXBFxA9AAuXG1Ss0+giVsuxvYJuHC1Sc0+gSZuuRjb+QRSU/ak/EjAkfQ/M38ItD62lPOAC8fzasZSXrDAHQDTAfNtofXzTgHUNWru80DdCVyP6wFcO1xVv0+gyiHX938B5Z5lQFp6XMYAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDklEQVRYR+2WsWsUQRTGv29ud8UUQhBtxSKNNjY2Bs5DUBREUDhFTlKYzF3wr4iVWNkmu5tLp4LRJoWFRf4AtRAEtQkY2OJMYyk3O/sk5yKau+zurQtncVPOvpnvx/fmvbfEhBcnrI8pQGUOSLN5NJ6d3YKIOCL3GIa9IumtDMB0Olch8npfVIAdV6k6V1ejPIjKAARg3G5vAriVQuy61ta5vv41C6IygIFoo+HEc3MvQd5IRSPH2vksiEoBDoWI4zq73Z1RTlQOMBJCpOdYe5Hd7peDELkAsrBwPPa8MwBqeQ/qr+/G1MR1H5E8n+5/d4ArDIK3f8YdCiCt1jEzM/OE5P2xhDOCRaTvBcGRXABZXDxllNomeboq8UFqkqTvhWE2gKysKBNF70meG4iL9IR8TPITrP1RGMiYGlz3Icj53ylQ6jLX1t5lOhB3OndE5Hlayx9dYy5xY2OvsPCochznERqtt0BeB5A4wFn6/ud/EgciZ5wyNFp/A3lCgA+e7/9KQ8F1sBEJkNsNh6rAaJ2AJEQ23SBoFtQehBmtX4G8maZv11XqQt48GAZotyUVfeH6/u2iAGZpqQGltlPx8sPIlASQ5eWTxto3JPecJGmVHsdlAYo6lduKpwBTB/4HBywAtT8PvCC4W/Z1Fz031Ij6Wj8lcI0iD5wwfFb0orJxuX9EZS8uem4KMHEHfgKeC/ghX1YCPAAAAABJRU5ErkJggg=="
      ],
      result: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACzklEQVR4Xu2ZMWjUYBTH/+9aOwlFpeTEawQLTm0OVwdXwcVJcNauiuAkdJO6KTi5qLvOgo6ODi4JKuiYWriAdNKpXp/kakq8610uX773Esx3493le+//+/7v5X0JoeUfarl+OADOAS0n4Eqg5QZwTdCVgCuBlhNwJdByA5jfBXb7K5eG6NwhgHk4fOZ/+vFRE6at+EYlEG+sXCHqvAfR4fXMzIRNP0xeakCI+94tYjzPxyfgci9KPpSNbwRgJ+i+A+HqP8GUIEyIz5JgvF2NBtd0APS7rwHcmAgmDGGq+NSE4Fd+mNxUARAH3joBIYg6WhBmiQd4uPibgrOfB19UAKRBZiZk2QmSsYx6QEZZMjGtGJUASDtBA3BlAFIQNMSnuVsBYBuClnirAGxB0BRvHUBVCNriRQCYQqhDvBiAshDqEi8KYF4IoyTyB5v8KGd5oDpuSrR2F5g2gs6c35nT2xAfneqUxYs7oHCaYwb+nqjrOFmqATi2HBogXhVABgGMF6O6q3nnM8eJ94C8tQu6PfhwS25rPVlSdUCR+CNHKHT+/KaoOGBu8VlmihDEARQOOWk3qLEfiAIoFE/Y/G8HoXnEZ82uzH+nDVym34s4wESQyTWmokWbYBUhVa41hWHVATYE2FijDAxrAGwmbnOtIhhWAEgkLLGmyHFYMlHJta2cBTQSlI5hXALSiZU4RFV6NW8EYKd/5hx4MW7My1HmA8L++V60972o6Y3/bgYg8J6C6O5EMOFDzMzHa8ATPxzcVwEQB94jInpQx2OsaRCYeduPki0VAHsXTi3/PLn0lYi8UUDhnR8XNQ6BmZMlYK0bJb9UAKRBdtdPrx4snNgC6CKBH/fC5E3Z4FX+H29416lD9wD+Rrz/0KT+VZ8IVRErea1RE5RMSHttB0CbeNPiOQc0bUe083EO0CbetHjOAU3bEe18nAO0iTctXusd8AezF5pfILRwLQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADaElEQVR4Xu2YTWsTURSGnztJ1ILWiqJgQVHEgoJtmkxCQVq1rlTErbgQf4DgWt3qXtcuxJWgiIWqWCi1sbROMv0QBP0VUoub0jZXLp1KaCeZycxkOpNMlsn9ep/znnNPrqDDP6LD9ZMASBzQ4QSSFOhwAyRFMEmBJAU6nECSAh1ugOQWSFIgSYE2JKCXGahK8vNFXjjJa7sUyBr0p2EKwSHgQaXAs0YQ2gqAJb6EoHtLtJQ8NYs8qgehbQDkTAZFlUkBPdvFSskTs8hjOwhtAcAu8v/FSn5LjRFT50dbAsga5NMwWWt7t+LVuFg7QIlPwZQQ7N8RXYfIb42PLYAgxMfWAUGJjyWAIMXHDkDBYKgKE35yfnutiE0NUOLlZrXv8lrwYnsNNhIv4Q+Ci/Xu+dj/F3Ah/rKps+gkNJatsF5mBMknO9tbkfclPtJFUImX8FnA3h29/abtfYuPLICwxEcSQJjiXQMYWKRnKcuy10Ljdt6gwZUUfECwz8b2y1JjdD7Pgtv13Ixz7AOGZulaTzMtJT/NInfdLOpljF7hqpSMtzrnm2qEciYZUWVCwCU1UUpetQKCJf6jgEwrC15zjZBE0yuMATdqJwYNYTfFN6wBeYPnQnC/jp1fVgrc82L12jk5g+uaYNxuHQktyXnXKZD9xrm0YMZ6XbVpv3ltFrjtFUK+wjUk73fD9rVnblgEFYSUxrSAI3Wi5AmCEi+qjCFIh53zrh2wNbBgcFaCemo+FgSEKIl33QcUDE5JmPMLIWriXQNQAy0IXxH0enFCFMU3BUANzpmc0DaYbRZCzuCWBm+ikPNN14DtExQEsUFJCE66cYIl/i2C1G4XvOYaoQb3W3aB46k1ZhtC0LmTK3NTg8iKbzoFapn0L9GbWeWLEJypw6oEDNv+JllZh9HFIqbXPiKoeY5/hhptdOE7R/esMifgtNsDBfWS43Y/p3G+AKjFLQglAX1Om0VNvK8UqBVbMDgsBdPA+XoQoig+MABqIfVoklljxg6ClPxFY9jP662Tu7z+7jsFaje2IEwpHlvfW+JHTZ2y10O2cl6gANRB+35xoHsFdQMMRF18oClQG6WcyUFtg3fVFA/n8xitjKDftQN3gN8DhT0/ARA28ajtlzggahEJ+zyJA8ImHrX9EgdELSJhn+cfMHVbUBK2C1UAAAAASUVORK5CYII="
      ],
      dom: {},
      table: {
        show: false
      },
      room1: {
        draw: false,
        coefficient: 1 / 3,
        items: [
          {
            type: "text",
            attr: {
              border: [2, "#363636"],
              borderRadius: "16",
              textAlign: "center",
              width: 28,
              height: 42
            },
            value: ""
          },
          {
            type: "textures",
            attr: {
              border: [4, "white"],
              textures: [
                "data:image/png;base64,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"
              ]
            },
            value: ""
          }
        ]
      },
      room2: {
        coefficient: 1,
        draw: false,
        items: [
          {
            type: "text",
            value: "A",
            attr: {}
          },
          {
            type: "text",
            value: "",
            attr: {},
            show: false
          },
          {
            type: "text",
            value: "B",
            attr: {}
          },
          {
            type: "comp",
            value: [
              {
                type: "box",
                level: 0,
                attr: {
                  border: [4, "black"]
                }
              },
              {
                type: "text",
                attr: {},
                value: ""
              },
              {
                type: "textures",
                attr: {
                  anchor: [-0.6, -0.7],
                  scale: [0.5, 0.7],
                  textures: []
                }
              }
            ],
            attr: {}
          },
          {
            attr: {
              anchor: [-0.3, -0.7],
              scale: [0.45, 0.75],
              textures: []
            },
            type: "textures"
          },
          {
            type: "comp",
            value: [
              {
                type: "box",
                level: 1,
                attr: {
                  border: [4, "black"],
                  borderLeft: [0]
                }
              },
              {
                type: "text",
                attr: {},
                value: ""
              },
              {
                type: "textures",
                attr: {
                  anchor: [-0.5, -0.75],
                  scale: [0.5, 0.7],
                  textures: []
                }
              }
            ],
            attr: {}
          },
          { attr: {} },
          {
            type: "textures",
            value: "",
            attr: {
              anchor: [-0.8, -1.1],
              scale: [0.4, 0.5],
              textures: [
                "data:image/png;base64,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"
              ]
            }
          }
        ]
      },
      robot: 0,
      repair: {
        show: false,
        index: 0
      }
    };
    return res;
  },
  watch: {},
  mounted: function() {
    this.formatData();
    this.getDom();
  },
  methods: {
    getDom: function() {
      let that = this;
      let id = "canvas" + this.id;
      var dom = document.getElementById(id);
      if (!dom) {
        requestAnimationFrame(() => {
          that.getDom();
        });
      } else {
        this.dom = {
          height: dom.clientHeight,
          width: dom.clientWidth
        };
        this.initCanvas();
      }
    },
    formatData: function() {
      let data = this.data;
      let type = data.images || data.choices[0];
      switch (type) {
        case "general":
          this.room2.draw = true;
          this.table.show = true;
          this.room2.items[3].value[1].value = "n1";
          this.room2.items[5].value[1].value = "n2";
          break;
        case "room1r":
          this.room1.draw = true;
          this.room1.coefficient = 1;
          let room1r = data.choices[1];
          this.room1.items[0].value = room1r.toString();
          let right = {
            type: "textures",
            value: "room1r",
            attr: {
              textures: [
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADaElEQVR4Xu2YTWsTURSGnztJ1ILWiqJgQVHEgoJtmkxCQVq1rlTErbgQf4DgWt3qXtcuxJWgiIWqWCi1sbROMv0QBP0VUoub0jZXLp1KaCeZycxkOpNMlsn9ep/znnNPrqDDP6LD9ZMASBzQ4QSSFOhwAyRFMEmBJAU6nECSAh1ugOQWSFIgSYE2JKCXGahK8vNFXjjJa7sUyBr0p2EKwSHgQaXAs0YQ2gqAJb6EoHtLtJQ8NYs8qgehbQDkTAZFlUkBPdvFSskTs8hjOwhtAcAu8v/FSn5LjRFT50dbAsga5NMwWWt7t+LVuFg7QIlPwZQQ7N8RXYfIb42PLYAgxMfWAUGJjyWAIMXHDkDBYKgKE35yfnutiE0NUOLlZrXv8lrwYnsNNhIv4Q+Ci/Xu+dj/F3Ah/rKps+gkNJatsF5mBMknO9tbkfclPtJFUImX8FnA3h29/abtfYuPLICwxEcSQJjiXQMYWKRnKcuy10Ljdt6gwZUUfECwz8b2y1JjdD7Pgtv13Ixz7AOGZulaTzMtJT/NInfdLOpljF7hqpSMtzrnm2qEciYZUWVCwCU1UUpetQKCJf6jgEwrC15zjZBE0yuMATdqJwYNYTfFN6wBeYPnQnC/jp1fVgrc82L12jk5g+uaYNxuHQktyXnXKZD9xrm0YMZ6XbVpv3ltFrjtFUK+wjUk73fD9rVnblgEFYSUxrSAI3Wi5AmCEi+qjCFIh53zrh2wNbBgcFaCemo+FgSEKIl33QcUDE5JmPMLIWriXQNQAy0IXxH0enFCFMU3BUANzpmc0DaYbRZCzuCWBm+ikPNN14DtExQEsUFJCE66cYIl/i2C1G4XvOYaoQb3W3aB46k1ZhtC0LmTK3NTg8iKbzoFapn0L9GbWeWLEJypw6oEDNv+JllZh9HFIqbXPiKoeY5/hhptdOE7R/esMifgtNsDBfWS43Y/p3G+AKjFLQglAX1Om0VNvK8UqBVbMDgsBdPA+XoQoig+MABqIfVoklljxg6ClPxFY9jP662Tu7z+7jsFaje2IEwpHlvfW+JHTZ2y10O2cl6gANRB+35xoHsFdQMMRF18oClQG6WcyUFtg3fVFA/n8xitjKDftQN3gN8DhT0/ARA28ajtlzggahEJ+zyJA8ImHrX9EgdELSJhn+cfMHVbUBK2C1UAAAAASUVORK5CYII="
              ]
            }
          };
          this.room1.items.push(right);
          break;
        case "s":
          this.room2.draw = true;
          this.table.show = true;
          let room = data.choices[2];
          this.room2.items[3].value[0].level = room[0][0].toString();
          this.room2.items[3].value[1].value = room[0][1].toString();
          this.room2.items[5].value[0].level = room[1][0].toString();
          this.room2.items[5].value[1].value = room[1][1].toString();
          this.robot = +data.choices[1];
          break;
        case "r":
          this.room2.draw = true;
          this.table.show = true;
          let roomr = data.choices[2];
          this.room2.items[3].value[0].level = roomr[0][0].toString();
          this.room2.items[3].value[1].value = roomr[0][1].toString();
          this.room2.items[5].value[0].level = roomr[1][0].toString();
          this.room2.items[5].value[1].value = roomr[1][1].toString();
          var which = data.choices[3][0];
          this.room2.items[4].attr.textures = [this.choose[which]];
          if (which == 1) {
            this.room2.items[4].attr.anchor = [-0.9, -0.7];
          }
          let result = data.choices[3][1];
          let map = [3, 5];
          let index = map[which];
          this.room2.items[index].value[2].attr.textures = [
            this.result[result]
          ];
          if (result == 0) {
            this.room2.items[index].value[2].attr.ancor = [-0.5, -0.75];
          }
          this.robot = data.choices[1];
          break;
        case "c":
          this.room1.draw = true;
          this.room2.draw = true;
          this.room2.coefficient = 7 / 12;
          this.table.show = true;
          let roomc = data.choices[3];
          this.room2.items[3].value[0].level = roomc[0][0].toString();
          this.room2.items[3].value[1].value = roomc[0][1].toString();
          this.room2.items[5].value[0].level = roomc[1][0].toString();
          this.room2.items[5].value[1].value = roomc[1][1].toString();
          let room1 = data.choices[1];
          this.room1.items[0].value = room1.toString();
          this.robot = data.choices[2];
          break;
        case "repair":
          this.repair.show = true;
          this.repair.index = data.choices[1];
          break;
      }
    },
    initCanvas: function() {
      const { Scene, Sprite, Label, Path } = spritejs;
      let id = "canvas" + this.id;
      // const scene = new Scene("#" + id, this.dom.width, this.dom.height);
      const scene = new Scene("#" + id, {
        viewport: [this.dom.width, this.dom.height]
      });
      const layer = scene.layer();
      if (this.room1.draw) {
        this.drawRoom1(layer);
      }
      if (this.room2.draw) {
        this.drawRoom2(layer);
      }
    },
    drawRoom1: function(layer) {
      const { Scene, Sprite, Label, Path, Group } = spritejs;
      let height = this.dom.height * 1;
      let width = this.dom.width * this.room1.coefficient;
      const box = new Sprite({
        size: [width, height],
        pos: [0, 0],
        border: [2, "black"],
        boxSizing: "border-box",
        overflow: "hidden",
        zIndex: 100
      });
      layer.append(box);
      let arr = this.room1.items;
      arr.forEach((item, index) => {
        let type = item.type;
        if (type == "text") {
          item.attr.lineHeight = 42;
          item.attr.pos = [(width - 28) / 2, height * 2 / 6];
          this.drawLabel(item, layer);
        }
        if (type == "textures") {
          if (item.value == "room1r") {
            item.attr.lineHeight = 42;
            item.attr.scale = [1.05, 1]
            item.attr.pos = [(width-50) / 2, height * 2 / 6 + 20];
          } else {
            item.attr.pos = [width * 3 / 8, height * 5 / 6];
            item.attr.size = [width / 4, height / 6];
          }
          this.drawImage(item, layer);
        }
      });
    },
    drawRoom2: function(layer) {
      const { Scene, Sprite, Label, Path } = spritejs;
      let width = this.dom.width * this.room2.coefficient;
      let height = this.dom.height * 1;
      let offset = this.dom.width - width;
      const box = new Sprite({
        size: [width, height],
        pos: [offset + 0, 0],
        border: [2, "#000"],
        boxSizing: "border-box",
        overflow: "hidden",
        zIndex: 100
      });
      layer.append(box);
      let arr = this.room2.items;
      arr.forEach((item, index) => {
        let type = item.type;
        let remainder = index % 3;
        let quotient = Math.floor(index / 3);
        item.attr.pos = [offset + width / 3 * remainder, height / 3 * quotient];
        item.attr.size = [width / 3, height / 3];
        if (type == "text") {
          item.attr.lineHeight = height / 3;
          item.attr = Object.assign({}, this.attr, item.attr);
          this.drawLabel(item, layer);
        }
        if (type == "box") {
          this.drawBox(item, layer);
        }
        if (type == "comp") {
          item.value.forEach((child, index) => {
            item.attr = Object.assign({}, this.attr, item.attr);
            child.attr = Object.assign({}, item.attr, child.attr);
            if (child.type == "text") {
              child.attr.lineHeight = height / 3;
              child.attr.zIndex = 10;
              this.drawLabel(child, layer);
            }
            if (child.type == "box") {
              let level = child.level;
              let fillColorWidth = Math.max(width / 400 * 24, 14);
              for (var i = level; i > -1; i--) {
                child.attr.pos = [
                  offset + width / 3 * remainder - i * fillColorWidth / 2,
                  height / 3 * quotient - i * fillColorWidth / 2
                ];
                child.attr.zIndex = 3 - i;
                child.attr.bgcolor = this.bgColor[level];
                if (i == 0) {
                  child.attr.bgcolor = "white";
                } else {
                  // child.attr.bgcolor = this.bgColor[level];
                }
                child.attr.size = [
                  width / 3 + i * fillColorWidth,
                  height / 3 + i * fillColorWidth
                ];
                this.drawBox(child, layer);
              }
            }
            if (child.type == "textures") {
              child.attr.zIndex = 10;
              this.drawImage(child, layer);
            }
          });
        }
        if (type == "textures") {
          let remainder = index % 3;
          let quotient = Math.floor(index / 3);
          item.attr.pos = [
            offset + width / 3 * remainder,
            height / 3 * quotient
          ];
          item.attr.size = [width / 3, height / 3];
          this.drawImage(item, layer);
        }
      });
    },
    drawLabel: function(data, layer) {
      const { Scene, Sprite, Label, Path } = spritejs;
      const label = new Label(data.value);
      label.attr(data.attr);
      layer.append(label);
    },
    drawBox: function(data, layer) {
      const { Scene, Sprite, Label, Path } = spritejs;
      const box = new Sprite(data.attr);
      layer.append(box);
    },
    drawImage: function(data, layer) {
      const { Scene, Sprite, Label, Path } = spritejs;
      const s = new Sprite();
      s.attr(data.attr);
      layer.append(s);
    }
  }
};
</script>

<style scoped lang='scss'>
.canvas-box {
  padding: 0 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .roomName {
    height: 25px;
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 600;
    span {
      position: relative;
    }
    .room1 {
      left: 15%;
    }
    .room2 {
      left: 57%;
    }
  }
}
.repair {
  padding: 30px;
  img {
    width: 100%;
  }
}
.robot {
  text-align: center;
  margin-top: 20px;
  &.hasRoom1 {
    margin-left: 41%;
  }
  img {
    width: 35px;
  }
}
.canvas-container {
  max-width: 400px;
  &.hasRoom1 {
    max-width: 600px;
    .canvas {
      padding-bottom: 50%;
    }
  }
  &.room1r {
    max-width: 260px;
    .canvas {
      padding-bottom: 120%;
    }
  }
  text-align: center;
  display: flex;
  align-items: center;
  .canvas {
    height: 0;
    padding-bottom: 70%;
    width: 100%;
    // background: #e1e3e5;
  }
}
table {
  margin: 15px 0;
  font-size: 18px;
  width: 100%;
  tr {
    width: 50%;
    height: 40px;
  }
  th {
    width: 50%;
  }
  td {
    text-align: center;
    position: relative;
    left: -10px;
  }
  .diff {
    display: inline-block;
    width: 15px;
  }
  .level {
    display: inline-block;
    height: 0px;
    width: 55px;
    background: black;
    border: 2px solid black;
    border-left: none;
    border-right: none;
    margin-left: 15px;
    position: relative;
    top: -5px;
  }
  .level2 {
    height: 8px;
    background: yellow;
    top: -2px;
  }
  .level3 {
    height: 16px;
    background: red;
    top: 2px;
    .line {
      display: inline-block;
      width: 100%;
      border: 1px solid black;
      position: absolute;
      left: 0;
      top: 5px;
    }
  }
  .circle {
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 28px;
    border: 1px solid #333;
    border-radius: 80px;
  }
}
</style>
