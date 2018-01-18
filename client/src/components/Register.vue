<template >
  <div style="width: 60%;" class="container">

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Default input" id="inputDefault">
    </div>

    <button v-on:click="signUp" type="button" class="btn btn-primary">Register</button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: this.name,
      email: this.email,
      password: this.pasword
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    signUp () {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.register(payload)
    }
  }
}
</script>

<style lang="css">
</style>
