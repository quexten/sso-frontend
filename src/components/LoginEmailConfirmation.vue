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
  created: function () {
    this.verifyEmailSignIn(this.$route.query.token)
      .then(data => {
        this.exchangeToken(data.token)
          .then(exchangeData => {
            this.$cookie.set('com.quexten.userId', exchangeData.userId, { expires: '1Y' })
            this.$cookie.set('com.quexten.token', exchangeData.token, { expires: '1Y' })
            this.$router.push('/account')
            console.log(exchangeData)
          })
        console.log(data.token)
      })
  }
}
</script>
