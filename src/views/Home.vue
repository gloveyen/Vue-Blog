<template>
  <div class="home">
    <section class="home-articles">
      <article
        v-for="(art,index) in filterBySearchKey"
        :key="index"
      >
        <h3 @click="routerToArticle(art.id)">{{ art.title }}</h3>
        <i>{{ art.date | toDate }}</i>
        <span>{{ art.content | subContent }}</span>
      </article>
    </section>
    <section class="home-side-bar">
      <SideBar :articles="articles" />
    </section>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import axios from "axios";
  import SideBar from "@/components/SideBar";

  export default {
    name: "Home",
    methods: {
      routerToArticle: function(id) {
        this.$router.push({ name: "Article", params: { id: id } });
      }
    },
    computed: {
      ...mapState(['articles']),
      ...mapGetters(['filterBySearchKey'])
    },
    filters: {
      subContent: content => {
        return content.substring(0, 150);
      },
      toDate: timestamp => {
        const date = new Date(timestamp);
        let Y = date.getFullYear();
        let M = date.getMonth();
        let D = date.getDate();
        let H = date.getHours();
        let min = (Array(2).join("0") + date.getMinutes()).slice(-2);
        return `${Y}/${M + 1}/${D} ${H}:${min}`;
      }
    },
    components: {
      SideBar
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    display: flex;

    .home-articles {
      article {
        display: flex;
        padding-left: 2rem;
        justify-content: center;
        margin: 1rem;
        flex-direction: column;
        align-items: flex-start;
        width: 75vw;
        height: 200px;
        background-color: #dddddd;
        border-radius: 16px;

        h3 {
          cursor: pointer;

          &:hover {
            opacity: 0.6;
          }
        }

        i {
          color: #8f8f8f;
        }

        span {
          text-align: left;
          padding-right: 1.5rem;
        }
      }
    }

    .home-side-bar {
      width: 25vw;
      padding: 1rem;
      height: calc(100vh - 56px);
    }
  }
</style>
