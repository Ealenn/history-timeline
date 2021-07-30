<template>
<div class="tabs-content" :id="currentSection.Id" :style="'background-image: url('+ getSectionPicture() + ');'">
  <div class="overlay">
    <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
              <div class="content">
                <p>{{ currentSection.Content }}</p>
              </div>
              <div class="wrapper">
                  <section class="tabgroup">
                      <div v-for="(tab, index) in currentSection.Tabs" v-bind:key="index" :id="'tab' + index" :style="isActiveTab(index) ? '' : 'display:none'">
                          <img :v-lazy="getSectionPicture(tab.Id)">
                          <p>{{ tab.Description }}</p>
                      </div>
                  </section>
                  <ul class="tabs clearfix">
                      <li v-for="(tab, index) in currentSection.Tabs" v-bind:key="index">
                          <a href="" v-on:click.prevent="activeTab = index" :class="isActiveTab(index) ? 'active' : ''">{{ tab.Title }}</a>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import { HistorySection } from '@/lib/domain/history-section';

@Component
export default class Section extends Vue {
  public activeTab = 0;
  @PropSync('current') currentSection!: HistorySection;

  isActiveTab(index: number): boolean {
    return this.activeTab == index;
  }

  getSectionPicture(id = 'hero'): string {
    return `img/${this.currentSection.Id}/${id}.jpg`;
  }
}
</script>

<style scoped>
.content {
  color: #fff
}

.overlay {
  background: rgba(0, 0, 0, 0.65);
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12vh;
  padding-bottom: 12vh;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

.tabs-content {
  background-attachment: fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
}

section {
  background-color: transparent;
  padding-bottom: 15px;
}

.wrapper {
  text-align: center;
}

.tabs {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

img {
  vertical-align: middle;
  width: 100%;
  max-width: 756px;
  height: auto;
  max-height: 400px;
}

.tabs li {
  display: inline-block;
  text-align: center;
  margin: 10px;
}

.tabs a {
  display:block;
  text-align:center;
  text-decoration:none;
  text-transform:uppercase;
  color:#fff;
  font-size: 14px;
  font-weight: 700;
  padding:10px 15px;
  border:4px solid #fff;
}

.tabs a:hover {
  color: #2ecc71;
}

.tabs .active {
  border:4px solid #2ecc71;
}

.tabgroup p {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 25px;
}

.clearfix:after {
  content:"";
  display:table;
  clear:both;
}
</style>
