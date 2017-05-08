<template>
  <div>
    <h1>user index</h1>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) in users' :key='index'>
          <td>{{user.name}}</td>
          <td>
            <router-link :to='`/users/${user.id}/edit`'>edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to='/users/new'>new user</router-link>
  </div>
</template>

<script>
export default{
  data(){
    const users = [
      {
        id: 1,
        name: 'name1',
      },
      {
        id: 2,
        name: 'name2',
      },
    ]
    return {
      users,
    }
  }
}
</script>

<style scoped>
</style>
