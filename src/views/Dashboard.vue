<template>
    <div class="dashboard_container">
        <Navbar/>
        <div class="dashboard">
          <Sidebar/>
          <div class="content px-3 py-4 m-0">
              <router-view/>
          </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
export default {
    name: 'dashboard',
    components: {
        Sidebar,
        Navbar
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 20% auto;
    background-color: white;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>
