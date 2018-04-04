<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">Logging you in!</h1>
  </div>
 </v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
export default {
  methods: {
    alertUser: function (user) {
      if (this.user != null && this.user.email)
        this.$router.push('profile')
    }
  },
  created: function () {
    this.subscribeToUser(user => {
      this.alertUser(this.user)
    })
    this.confirmEmailToken(this.$route.query.userId, this.$route.query.token)
  }
}
</script>
