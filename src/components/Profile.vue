<template>
  <v-content class="profile">
    <v-card-actions>
      <v-divider></v-divider>
        <h4 class="grey--text">Profile</h4>
      <v-divider></v-divider>
    </v-card-actions>
    <v-card-actions>
      <v-avatar class="ma-0" size="100">
        <img :src="avatar">
      </v-avatar>
      <v-container>
        <v-text-field
          label="Username"
          v-model="username"
          counter
          max="15"
          @change="$store.dispatch('setUsername', username)"
          color="primary"
          class="my-2"
        ></v-text-field>

        <v-menu offset-y>
          <v-btn
            color="primary"
            block
            slot="activator"
            disabled
          >
            Select Avatar
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in icons"
              :key="index"
              @click=""
            >
              <v-list-tile-avatar><img :src=item.avatar></v-list-tile-avatar>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-container>
    </v-card-actions>
    <v-card-actions>
      <v-btn block color="primary" @click.native="$store.dispatch('logout').then(() => { $router.push('/') })">Logout</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block color="error" @click.native="">Delete</v-btn>
    </v-card-actions>

  </v-content>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  transform: translateY(-100px);
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
