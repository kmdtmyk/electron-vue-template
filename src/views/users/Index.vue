<template>
  <div>
    <h1>user index</h1>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>furigana</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) in users' :key='index'>
          <td>{{user.name}}{{user.delete}}</td>
          <td>{{user.furigana}}</td>
          <td>
            <router-link :to='`/users/${user._id}`'>show</router-link>
            <router-link :to='`/users/${user._id}/edit`'>edit</router-link>
            <a href='javascript:void(0)' @click='remove(index)'>delete</a>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to='/users/new'>new user</router-link>
  </div>
</template>

<script>
import User from 'models/User'

export default{
  data(){
    return {
      users: []
    }
  },
  async beforeCreate(){
    this.users = await User.find()
  },
  methods: {
    async remove(index){
      if(confirm('Are you sure?') === false){
        return
      }
      await User.remove(this.users[index])
      this.users.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.delete{
  color: gray;
}
</style>
