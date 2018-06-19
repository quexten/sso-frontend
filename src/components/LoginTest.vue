<template>
  <v-content>
    <v-card-text>
      <v-form>
        <v-text-field v-model="test" prepend-icon="email" name="test" label="Test" type="text"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary"  @click.native="signInTest(test, $router)"> Login</v-btn>
    </v-card-actions>
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
    data () {
      return {
        test: ''
      }
    },
    methods: {
    },
    created: function () {
    }
  }
</script>
