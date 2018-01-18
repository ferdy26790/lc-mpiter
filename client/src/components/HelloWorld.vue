<template>
  <div class="container" style="width: 60%">
    <div class="card mb-3">
      <h3 class="card-header">Mpiter</h3>
      <div class="card-body">
        <h6 class="card-subtitle text-muted">please Login</h6>
      </div>
      <div style="height: 200px; width: 100%; display: block;" >
        Email: <br>
        <input v-model="email" type="email" > <br> <br>
        Password <br>
        <input v-model="password" type="password" >
        <br> <br>
        <button v-on:click="login({email, password})" type="button" class="btn btn-info">Login</button>
      </div>

      <div class="card-body">
        dont have account ? register
        <a href="/register" class="card-link">here</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: this.email,
      password: this.password
    }
  },
  methods: {
    ...mapActions([
      'signIn'
    ]),
    login(body) {
      this.signIn(body)
    }
  }
}
</script>

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
