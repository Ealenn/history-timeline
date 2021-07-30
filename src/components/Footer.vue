<template>
  <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="primary-button">
                      <a href="#body"><i class="fa fa-arrow-up"></i></a>
                  </div>
                  <ul>
                      <li v-for="(social, index) in socials" v-bind:key="index">
                        <a :href="social.Url" target="_BLANK">
                          <b-icon :icon="social.Icon" color="#3c3c3c"></b-icon>
                        </a>
                      </li>
                  </ul>
                  <p>
                      Copyright &copy; {{ date.getFullYear() }} Ealenn - Marchandise Rudy
                  </p>
              </div>
          </div>
      </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Social {
  Url: string;
  Icon: string;
}

@Component
export default class Footer extends Vue {
  readonly socials: Social[] = [
    {
      Url: 'https://github.com/Ealenn/',
      Icon: 'github'
    },
    {
      Url: 'https://twitter.com/Ealen_',
      Icon: 'twitter'
    },
    {
      Url: 'https://www.linkedin.com/in/rudymarchandise',
      Icon: 'linkedin'
    }
  ];
  readonly date: Date = new Date();
}
</script>

<style scoped>
footer {
  text-align: center;
  background-color: #282b2f;
  padding: 70px 0px;
}

footer .primary-button {
  margin-bottom: 30px;
}

footer ul {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

footer ul li {
  display: inline-block;
  margin: 0px 4px;
}

footer ul li a {
  color: #fff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  background-color: #2ecc71;
  color: #282b2f;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.5s;
  font-size: 17px;
}

footer ul li a:hover {
  color: #282b2f;
  background-color: #27ae60;
}

footer p {
  font-size: 12px;
  color: #fff;
  margin-top: 15px;
  color: #fff;
  letter-spacing: 0.5px;
  margin-bottom: 0px;
}
</style>
