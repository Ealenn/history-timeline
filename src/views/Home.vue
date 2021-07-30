<template>
  <div id="home">
    <MenuComponent />
    <HeroComponent />
    <SectionComponent v-for="section in sections" v-bind:key="section.Id" :current="section" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuComponent from '@/components/Menu.vue';
import HeroComponent from '@/components/Hero.vue';
import SectionComponent from '@/components/Section.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    MenuComponent,
    HeroComponent,
    SectionComponent
  },
  computed: {
    ...mapGetters({
        sections: 'sections'
    })
  }
})
export default class Home extends Vue {}
</script>
