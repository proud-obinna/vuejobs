<script setup>
import { onMounted, ref } from 'vue'


  // data() {
  //   return {
  //     name: 'John Doe',
  //     status: 'active',
  //     tasks: [
  //       { id: 1, title: 'Task 1' },
  //       { id: 2, title: 'Task 2' },
  //       { id: 3, title: 'Task 3' },],
  //     link: 'https://google.com'
  //   }
  // },

  // methods: {
  //   toggleStatus() {
  //     if(this.status === 'active') {
  //       this.status = 'pending'
  //     } else if (this.status === 'pending') {
  //       this.status = 'inactive'
  //     } else {
  //       this.status = 'active'
        
  //     }
  //     }
  //   }

    const name = ref('John Doe')
    const status = ref('active')
    const tasks = ref([
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
    ])
    const newTask = ref('')
    const link = ref('https://google.com')

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'active'
      }
    }

    const addTastk = () => {
      if(newTask.value === '') return
      tasks.value.push({ id: tasks.value.length + 1, title: newTask.value })
      newTask.value = ''
    }

    const deleteTask = (id) => {
      tasks.value.splice(id, 1)
    }

    onMounted( async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        tasks.value = data
      } catch (error) {
        console.log("error fetching tasks", error)
      }
    })

</script>

<template>
  <h1>Hello {{ name }}</h1>
  <p v-if="status === 'active'">The user is active</p>
  <p v-else-if="status === 'pending'">The user is pending</p>
  <p v-else>The user is inactive</p>

  <a :href="link">Google</a>

  <br />

  <button @click="toggleStatus">Change Status</button>

  <form @submit.prevent="addTastk">
    <label for="newTask">New Task</label><br />
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>

  <ul>
    <li v-for="(task, index) in tasks" :key="task.id">
      <span>{{ task.title }}</span> <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

</template>