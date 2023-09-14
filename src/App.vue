<template>
 <div class="container">
  <div class="title">
   <h1>Жилфонд</h1>
   <p>Пользователь</p>
  </div>
  <section class="content">
   <side-bar />
   <user-card />
  </section>
 </div>
</template>

<script>
import UserCard from "./components/UserCardDetails.vue";
import SideBar from "./components/SideBar.vue";
export default {
 components: { SideBar, UserCard },

 mounted() {
  this.$store.dispatch("getUsers");
 },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");
::-webkit-scrollbar {
 width: 5px;
}
::-webkit-scrollbar-track {
 background: #e9ecef;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb {
 background: #d6d6d6;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
 background: #b9b9b9;
}
.title {
 margin-top: 46px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 align-items: flex-end;
 h1 {
  color: #e31f24;
 }
 p {
  color: #333333;
 }
}
.container {
 padding: 0px 55px 38px 55px;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 .content {
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-areas: "sideBar userCard";
  margin-top: 30px;
  width: 100%;
  min-height: 90%;
  max-height: 400%;
  box-shadow: 0px 0px 10px 0px #0000001a;
  background-color: #fdfdfd;
  border-radius: 10px;
  grid-template-rows: 100%;
 }
}
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: "Montserrat", sans-serif;
}
@media (max-width: 1600px) {
 .container {
  .content {
   grid-template-columns: 35% 1fr;
  }
 }
}
@media (max-width: 1200px) {
 .container {
  .content {
   grid-template-columns: 45% 1fr;
  }
 }
}
@media (max-width: 1000px) {
 .container {
  padding: 0px 20px 38px 20px;
  .content {
   grid-template-columns: 50% 1fr;
  }
 }
}
@media (max-width: 600px) {
 .container {
  width: 98vw;
  padding: 0px 5px 38px 10px;
  .content {
   grid-template-columns: 1fr;
   grid-template-rows: 50% 1fr;
   grid-template-areas:
    "sideBar"
    "userCard";
   //    grid-area: "sideBar", "userCard";
  }
 }
}
</style>
