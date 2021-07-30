<template>
    <div>
        <b-button 
            v-for="Language in Languages"
            v-bind:key="Language.File"
            size="sm"
            :disabled="Lang == Language.File"
            variant="outline-dark"
            style="margin-right:5px"
            v-on:click="changeLang(Language.File)">
                <country-flag :country='Language.Flag' style="float:left"/>
            </b-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
        Lang: 'lang'
    })
  }
})
export default class LangButton extends Vue {
    private Languages = [
        {
            Title: 'Français',
            Flag: 'fr',
            File: 'fr'
        },
        {
            Title: 'English',
            Flag: 'usa',
            File: 'en'
        }
    ];

    changeLang(lang: string) : void {
        this.$store.commit('CHANGE_LANG', lang);
    }
}
</script>

<style scoped>

</style>
