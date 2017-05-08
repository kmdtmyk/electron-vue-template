<template>
  <div>
    <h1>user new</h1>
    <form @submit.prevent='submit'>
      <div>
        <label>name</label>
        <input type='text' v-model='user.name'>
      </div>
      <div>
        <label>furigana</label>
        <input type='text' v-model='user.furigana'>
      </div>
      <div>
        <button type='submit'>submit</button>
      </div>
    </form>
    <router-link to='/users'>back</router-link>
  </div>
</template>

<script>
import User from 'models/User'

export default{
  data(){
    return {
      user: {}
    }
  },
  methods: {
    async submit(e){
      const user = await User.insert(this.user)
      this.$router.push(`/users/${user._id}`)
    },
  },
}
</script>

<style scoped>
</style>
