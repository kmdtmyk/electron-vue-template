<template>
  <div>
    <h1>user edit</h1>
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
  async beforeCreate(){
    const _id = this.$route.params.id
    this.user = await User.findOne({_id})
  },
  methods: {
    async submit(e){
      await User.update(this.user)
      this.$router.push('./')
    },
  },
}
</script>

<style scoped>
</style>
