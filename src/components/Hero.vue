<template>
    <div class="parallax-content baner-content">
        <div class="container">
            <div class="first-content">
                <h1>History Timeline</h1>
            </div>
            <Lang style="margin:10px" />
            <MouseComponent />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MouseComponent from '@/components/elements/Mouse.vue';
import Lang from '@/components/elements/Lang.vue';

@Component({
  components: {
    MouseComponent,
    Lang
  },
})
export default class Hero extends Vue {
}
</script>

<style scoped>
.parallax-content {
  background-position: center center;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
}

.baner-content {
  padding-top: 30vh;
  text-align: center;
  background-image: url(/img/hero.jpg);
}

.baner-content h1 {
  font-family: 'Great Vibes', cursive;
  text-transform: none;
  font-weight: 100;
  margin-top: 0px;
  font-size: 6em;
  color: #fff;
  margin-bottom: 0px;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
</style>
