<template>
  <v-content class="profile">
    <v-card-actions>
      <v-divider></v-divider>
        <h4 class="grey--text">Data Takeout</h4>
      <v-divider></v-divider>
    </v-card-actions>
    The data kept about you, as a user, is found in the tree below.
    <v-card-text dark>
      <v-spacer class="lightgrey">
        <tree-view :data="$store.getters.user" :options="{maxDepth: 3}"></tree-view>
      </v-spacer>
    </v-card-text>
  </v-content>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  position: absolute;
  top: 70px;
  left: 100px;
  right: 15px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}
</style>
<script>
  export default {
    data () {
      return {
        avatar: '',
        username: '',
        icons: [
        ]
      }
    },
    created: function () {
      this.username = this.$store.getters.username
      this.avatar = this.$store.getters.avatar
    }
  }
</script>
