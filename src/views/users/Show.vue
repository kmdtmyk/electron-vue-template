<template>
  <div>
    <h1>user show</h1>
    <div>
      <label>name</label>
      <span>{{user.name}}</span>
    </div>
    <div>
      <label>furigana</label>
      <span>{{user.furigana}}</span>
    </div>
    <router-link :to='`/users/${user._id}/edit`'>edit</router-link>
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
  }
}
</script>

<style scoped>
</style>
