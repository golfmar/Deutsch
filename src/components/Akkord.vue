<template lang='pug'>

//- div(v-for="el in topTable" :key="index"  )
//-   div(v-if="el.isOpen")
//-   .plaza(v-for="i in topTable.row1" :key="index") {{i}}
.akkord(:class="(titlesObject == false) ? 'kurz' : ''" )


  .akkord__body
    .akkord__nav(v-if= "titlesObject") 
      Button(  v-for="item in props.titles" :key="index" :item='item' :text='item.title' @click='ButtonHandler(item.id) ' )
    .akkord__items
      div(v-for="Data in contentData.value" :key="index")
        .block( :class="(Data.isOpen == true) ? '_is-active' : '' "  )
          div(v-for="item in props.table" :key="index")
            .tabel(v-if=" item.isOpen==true" )
              ul
                li ich
                li du
                li er,sie,es
                li ihr
                li wir,sie,Sie 
                li
                  ul
                    li(v-for="i in item.row1" :key="index" ) {{ i }} 

          .block__buttons(v-if="AuthStore.isAuthenticated")
            Button( text='Mischen'   @click = "handlerClick(Data)"  svg='arrow-repeat')
            Button( text='Start'  @click='start'    svg='sport')
            Button( text='Stop'   @click='stop'    svg='stopwatch')
            Button( text='Reset'   @click='reset'    )
          .tablo(v-if="AuthStore.isAuthenticated")
            span.zeit Anzahl der richtigen Antworten:  
              span {{ count }}
            span.zeit Sie haben für das Training ausgegeben:   
              span {{ formattedTime }}
          .spielPlatz

            .block__line(v-for="el in Data" :key="index" ) 
              .block__info 
                h4 {{el.text}}
                button.tooltip(v-if="el.x" v-tool  :data = "el.x")
                  span i
                button.tooltip(v-if="el.content"  v-tool  :data = "el.content.join(' ')")
                  span i
              div
                Input(v-if="el.x"   :Antwort='content'  :content='content' :resetInputs='resetInputs'  v-for="content in el.x.split(' ')" :key="index" @lineFertig="lineFertig" )
                Input(v-if="!el.x"   :Antwort='content'  :content='el.content' :resetInputs='resetInputs'  v-for="content in el.content" :key="index" @lineFertig="lineFertig" )
</template>
// Object.values(el.content).split(',').join(' ')
<script setup>
import { ref, onMounted, computed, reactive, watchEffect } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Plaza from "@/components/Plaza.vue";

// ============================


// ============================
const props = defineProps({
  titles: {
    type: Array,
    required: false
  },
  Data: {
    type: Array,
    required: false
  },
  table: {
    type: Object,
    required: false
  },

})
var time = ref(0);        // Количество секунд
var interval = ref(null);   // Интервал для обновления времени
const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time.value % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time.value % 60).toString().padStart(2, '0');
  return `${hours}h ${minutes}m ${seconds}s`;
})
const start = () => {
  if (!interval.value) {
    interval.value = setInterval(() => {
      time.value++;
    }, 1000);
  }
};
const emit = defineEmits(['addTime'])
const capturedValue = ref(null);
const stop = () => {
  clearInterval(interval.value);
  interval.value = null;
};
var prozent = ref(0);
var resetInputs = ref(false);
const reset = () => {
  stop();
  capturedValue.value = formattedTime.value;
  count.value > 0 ? prozent.value = Math.round(count.value * 100 / countAll.value) : prozent.value = 0;
  emit('addTime', capturedValue.value, prozent.value)
  resetInputs.value = !resetInputs.value;
  count.value = 0;
  formattedTime.value = 0;
  time.value = 0;
  prozent.value = 0;
};
// --------------------------
const handlerClick = (Data) => {
  Data.sort(() => Math.random() - 0.5);
}
// --------------------------
const ButtonHandler = (id) => {
  if (props.titles) {
    props.titles.forEach(car => {
      car.id == id ? car.isOpen = true : car.isOpen = false
    })
  }
  if (props.Data) {
    props.Data.forEach(car => {
      car.id == id ? car.isOpen = true : car.isOpen = false
    })
  }
  if (props.table) {
    props.table.forEach(car => {
      car.id == id ? car.isOpen = true : car.isOpen = false
    })
  }
};
// --------------------------
var count = ref(0);
var countAll = ref(0);
const lineFertig = (some) => {
  if (some.closest(".block__line").nextElementSibling) {
    some.closest(".block__line").nextElementSibling.querySelector('input').focus();

  }
  let lineItems = [...some.closest(".block").querySelectorAll(".block__line")];
  countAll.value = lineItems.length
  count.value++
}
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
// --------------------------
onMounted(() => {
  if (props.titles.length == 1) {
    props.titles = ''
  }
})
const titlesObject = computed(() => {
  return props.titles.length > 1
}
)


var contentData = reactive([]);
var topTable = reactive([]);

watchEffect(() => {
  contentData.value = props.Data;
  topTable.value = props.table;

})

</script>

<style lang='scss' scoped>
.akkord__body {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 5px;
  margin: 20px 0 0 0;

  &:has(.akkord__nav) {
    grid-template-columns: 150px 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

}

.tabel {
  background-color: #fff;
  border: 2px solid $brown-7;
  box-shadow: 1px 1px 4px #666;
  border-radius: 3px;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: "Roboto-Regular", sans-serif;
  margin: 0 0 10px 0;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;

    li {

      line-height: 1;
      outline: 1px solid #ededed;
      text-shadow: none;
      text-align: center;
      padding: 3px;

      &:last-of-type {
        border-right: none;
      }

      &:not(:has(ul)) {
        font-size: 16px;
        font-weight: 600;
      }

      &:has(ul) {

        padding: 0 0 0 0;
        grid-row: 2/3;
        grid-column: 1 / -1;

        & ul li {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
}



.akkord__nav {
  display: flex;
  flex-direction: column;
  gap: 5px 0;

  button {
    padding: 3px 5px;
  }
}

.mischen {
  position: absolute;
  top: -50px;
  left: 0px;
  padding: 10px 20px;

  &:hover {
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.5), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, 0.8);
  }
}

.akkord__items {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .block {
    position: fixed;
    z-index: -1;
    opacity: 0;
    transition: all .3s;

    &._is-active {
      position: relative;
      z-index: 1;
      transform: translate(0, 0);
      order: -1;
      animation: pulse .3s ease-in-out;
      opacity: 1;
      padding: 0 0 0 10px;

      .block__buttons {
        display: flex;
        column-gap: 5px;

        button {
          padding: 3px 5px;

          &:has(svg) {
            padding: 8px 30px 8px 5px;
          }
        }
      }

      .tablo {
        margin: 10px 0;
        border: 3px solid white;
        border-radius: 10px;
        background: rgba(214, 210, 208, 0.9);
        padding: 5px;

        span.zeit {
          font-family: 'HouschkaPro-DemiBold', sans-serif;

          span {
            font-size: larger;
            color: #eb2f2f;
            white-space: nowrap;
          }
        }

        display: flex;
        flex-direction: column;
      }

      @keyframes pulse {
        0% {
          transform: translate(-100%, 0);
          opacity: 0;
        }

        70% {
          opacity: 0;
        }

        100% {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }
  }
}

.block__info {
  position: relative;
  display: inline-block;
}

.block__line {
  margin: 0 0 6px 0;

  h4 {
    display: inline-block;
    margin: 0 0 3px 0;
    position: relative;
    padding: 0 0 0 25px;
  }

  input:not([type="range"]) {
    height: 22px;
    border-radius: 3px;
    margin: 0 3px 0 0;

    &:last-of-type {
      margin: 0 0 0 0;
    }
  }
}

.spielPlatz {
  padding: 5px;
  border: 3px solid white;
  border-radius: 10px;
  background: rgba(214, 210, 208, 0.9);
}

@media (max-width: 600px) {
  .akkord__body {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0;
    margin: 20px 0 0 0;
  }

  .akkord__items {
    .block {
      margin: 10px 0 0 0;

      &._is-active {
        padding: 0 0 0 0;

        .block__buttons {
          display: flex;
          column-gap: 5px;

          button {
            padding: 3px 5px;
          }
        }

        .tablo {
          margin: 10px 0;

          span.zeit {
            font-family: 'HouschkaPro-DemiBold', sans-serif;
          }

          display: flex;
          flex-direction: column;
        }

        @keyframes pulse {
          0% {
            transform: translate(-100%, 0);
            opacity: 0;
          }

          70% {
            opacity: 0;
          }

          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
      }
    }
  }
}

.plaza {
  display: grid;
  // grid-auto-flow: column;
  column-gap: 20px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fill, 400px);

  table {
    margin: 5px 0;
    background-color: #fff;
    border: 2px solid $brown-7;
    box-shadow: 1px 1px 4px #666;
    border-radius: 3px;
    border-collapse: collapse;
    border-spacing: 0;

    text-align: center;
    font-family: "Roboto-Regular", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: none;
    min-width: 256px;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    unicode-bidi: isolate;
    border-color: inherit;
  }

  table th:first-child {
    border-left: none;
  }

  table th {
    border: 1px solid rgba(255, 255, 255, 0.25);
    text-align: center;
    vertical-align: middle;
    background-color: $brown-5;
    color: #fff;
    padding: 1px 3px;

    & p {
      font-size: 16px;
    }
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
  }



  table td {
    display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
  }

  table td {
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    color: #202020;
    padding: 1px 3px;
    line-height: 1.5rem;
    font-size: 14px;
    text-align: center;
  }

  tbody tr td:first-child {
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }

  .big {
    display: flex;
    column-gap: 4px;
    justify-content: center;
    border: none;
    padding: 3px 0;
  }
}
</style>
