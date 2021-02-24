<template>
  <div>
    <!-- <q-btn class="q-ma-xl btn" color="primary" label="Show / Hide" v-on:click="$_changeVisibleItem"/> -->
    <div class="btn">
      <q-btn
        v-for="item in mapa"
        v-bind:key="item.position"
        class="q-ma-xl"
        color="primary"
        :label="'go to '+item.color"
        v-on:click="$_goTo(item.position)"/>
    </div>
    <!-- :name="'slide-'+visible_item_direction" -->
    <transition-group
      :name="'slide-'+visible_item_direction"
      tag="div"
      class="container"
      mode="out-in">
        <div
          v-for="item in mapa"
          v-bind:key="item.position"
          v-show="item.position===visible_item"
          :style="'background-color:'+item.color"
          class="pg blurjs"
          fadejs-data="opacity: 0.6;"
        >
      </div>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      mapa: [
        {
          position: 0,
          direction: 'left',
          color: 'red'
        },
        {
          position: 1,
          direction: 'right',
          color: 'blue'
        },
        {
          position: 2,
          direction: 'up',
          color: 'green'
        },
        {
          position: 3,
          direction: 'down',
          color: 'grey'
        },
        {
          position: 4,
          direction: 'left',
          color: 'yellow'
        },
        {
          position: 5,
          direction: 'right',
          color: 'purple'
        },
        {
          position: 6,
          direction: 'up',
          color: 'pink'
        },
        {
          position: 7,
          direction: 'down',
          color: 'black'
        }
      ],
      visible_item: 0,
      visible_item_direction: ''
    }
  },

  mounted () {
    // const motionblurjs = document.createElement('script')
    // motionblurjs.setAttribute('src', 'https://www.motionblurjs.com/blur.js')
    // document.head.appendChild(motionblurjs)
    // console.log(motionblurjs)
  },

  methods: {
    $_changeVisibleItem () {
      this.visible_item_direction = this.mapa[this.visible_item].direction
      this.visible_item = (this.visible_item + 1 !== this.mapa.length) ? this.visible_item + 1 : 0
    },
    // $_prev () {
    // },
    // $_next () {
    // },
    async $_goTo (destinyItem) {
      const timer = ms => new Promise(resolve => setTimeout(resolve, ms))
      while (this.visible_item !== destinyItem) {
        this.$_changeVisibleItem()
        await timer(700)
      }
      // const last = this.mapa.length
      // const value = a - finalPoint
      // const valueMenorZero = value < 0
      // const casasValues = valueMenorZero ? value * -1 : value
      // const aMenorQueMetade = a < Math.round(last / 2)
      // const casasMenorQueMetade = casasValues < Math.round(last / 2)
      // if (aMenorQueMetade) {
      //   console.log(valueMenorZero && casasMenorQueMetade ? 'next' : 'prev')
      // } else {
      //   console.log(valueMenorZero || casasMenorQueMetade ? 'prev' : 'next')
      // }
    }
  }
}
</script>

<style>
body {
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

.container {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.btn{
  position:fixed;
  z-index: 10;
}

.pg{
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-up-leave-active,
.slide-up-enter-active,
.slide-down-leave-active,
.slide-down-enter-active,
.slide-left-leave-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 0.7s cubic-bezier(.71,0,.33,1.56) 0ms;
  /* transition: all 0.7s ease-in-out; */
  /* animation: motion-blur 0.7s; */
}

.slide-right-leave-to,
.slide-left-enter {
  /* filter: blur(5px); */
  /* opacity: .8; */
  transform: translateX(100%);
}

.slide-right-enter,
.slide-left-leave-to {
  /* filter: blur(5px); */
  /* opacity: .8; */
  transform: translateX(-100%);
}

.slide-down-leave-to,
.slide-up-enter {
  /* filter: blur(5px); */
  /* opacity: .8; */
  transform: translateY(100%);
}

.slide-down-enter,
.slide-up-leave-to {
  /* filter: blur(5px); */
  /* opacity: .8; */
  transform: translateY(-100%);
}

@keyframes motion-blur {
  0%
  {
    box-shadow: 0 0 0 0 purple;
  }
  100%
  {
    box-shadow: 10em 0 .4em purple;
  }
}
</style>
