<template>
    <div class="fixed-side-navbar">
        <ul class="nav flex-column">
            <li class="nav-item" v-for="section in sections" v-bind:key="section.Id">
                <a class="nav-link" v-bind:class="{ active: ActiveItem == section.Id }" :href="'#' + section.Id">
                  <span>{{ section.Title }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { HistorySection } from '@/lib/domain/history-section';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      sections: 'sections'
    })
  }
})
export default class Menu extends Vue {
  public ActiveItem = 'none';
  public sections!: HistorySection[];

  mounted(): void {
    this.ActiveItem = this.sections[0].Id;
    window.addEventListener('scroll', this.scrollStateChanged);
  }

  scrollStateChanged(): void {
    let currentElement;
    let currentId = this.ActiveItem;

    for (let section of this.sections) {
      let element = document.querySelector('#' + section.Id);
      if (element) {
        let bounding = element.getBoundingClientRect();
        
        if (currentElement != null) {
          currentElement = currentElement.top > bounding.top ? currentElement : bounding;
        } else {
          currentElement = bounding;
        }

        if (bounding == currentElement) {
          currentId = section.Id;
        }
      }
    }
    this.ActiveItem = currentId;
  }
}
</script>

<style scoped>
.fixed-side-navbar {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 99999;
  margin-top: -100px;
  text-align: right;
  padding: 30px 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.fixed-side-navbar:hover {
  background: transparent;
}
.fixed-side-navbar:hover .nav > li > a > span {
  color: rgba(0, 0, 0, 0.5);
  display: block;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  padding: 2px 12px;
  border-radius: 15px;
}
.fixed-side-navbar .nav > li a.active {
  background-color: transparent;
  color: black;
}
.fixed-side-navbar .nav > li a.active:after {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
.fixed-side-navbar .nav > li a.active:before {
  content: '';
  position: absolute;
  top: 50%;
  right: 17px;
  margin-top: -8px;
  width: 16px;
  height: 16px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 10px;
}
.nav>li {
  position: relative;
  display: block;
}
.fixed-side-navbar .nav > li a {
  color: #fff;
  min-height: 32px;
  background: transparent;
  padding: 5px 45px 5px 25px;
  border-right: none;
}
.fixed-side-navbar .nav > li a span {
  display: none;
  -webkit-transition: all .2s;
  transition: all .2s;
}
.fixed-side-navbar .nav > li a:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: rgba(250, 250, 250, 0.75);
  -webkit-transition: all .3s;
  transition: all .3s;
  -webkit-transform: scale(0.6);
          transform: scale(0.6);
}
.fixed-side-navbar .nav > li a:hover {
  background-color: transparent;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-color: black;
  boder-right: 0;
}
.fixed-side-navbar .nav > li a:hover > span {
  color: black;
  display: block;
}
</style>
