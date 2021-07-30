<template>
  <div>
      <div class="mouse">
          <div class="wheel"></div>
      </div>
      <div>
          <span class="arrow arrow-one"></span>
          <span class="arrow arrow-two"></span>
          <span class="arrow arrow-three"></span>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Mouse extends Vue {
}
</script>

<style scoped>
.arrow {
    display: block;
    width: 5px;
    height: 5px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    margin: 0 0 3px 6px;
}

.arrow-one {
    margin-top: 6px;
}

.arrow-one, .arrow-two, .arrow-three {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    margin: auto;
}

.arrow-one {
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -webkit-animation-direction: alternate;
}

.arrow-two {
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -webkit-animation-direction: alternate;
}

.arrow-three {
    -webkit-animation-delay: .3s;
    -moz-animation-delay: .3s;
    -webkit-animation-direction: alternate;
}

.mouse {
    height: 42px;
    width: 28px;
    border-radius: 20px;
    transform: none;
    border: 4px solid white;
    top: 170px;
    margin: auto;
    margin-top:2%;
    margin-bottom:1%;
}

.wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: white;
    position: relative;
}

.wheel {
    -webkit-animation: mouse-wheel 1.2s ease infinite;
    -moz-animation: mouse-wheel 1.2s ease infinite;
}

@-webkit-keyframes mouse-wheel {
    0% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        -webkit-transform: translateY(6px);
        -ms-transform: translateY(6px);
        transform: translateY(6px);
    }
}

@-moz-keyframes mouse-wheel {
    0% {
        top: 1px;
    }

    50% {
        top: 2px;
    }

    100% {
        top: 3px;
    }
}

@-webkit-keyframes mouse-scroll {

    0% {
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes mouse-scroll {

    0% {
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes mouse-scroll {

    0% {
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
}

@keyframes mouse-scroll {

    0% {
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
}
</style>
