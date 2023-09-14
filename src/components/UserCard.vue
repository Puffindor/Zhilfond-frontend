<template>
 <div class="card" @click="selectUser">
  <img src="../assets/Placeholder.png" />
  <div class="info">
   <h3>{{ user.name }}</h3>
   <p>{{ user.email }}</p>
  </div>
 </div>
</template>
<script>
export default {
 props: ["user"],
 methods: {
  selectUser() {
   this.$store.dispatch("selectUser", this.user);
  },
 },
};
</script>
<style lang="scss" scoped>
.card {
 display: flex;
 width: 98%;
 border-radius: 10px;
 box-shadow: 0px 0px 10px 0px #0000001a;
 margin-bottom: 18px;
 .info {
  width: 100%;
  padding: 15px 34px 18px 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  transition: 200ms;
  h3 {
   font-size: 14px;
   color: #333333;
   font-weight: 600;
  }
  p {
   color: #76787d;
   font-size: 14px;
   font-weight: 400;
  }
 }
 .info:hover {
  background-color: #e0e0e0;
 }
}
@media (max-width: 750px) {
 .card {
  .info {
   padding: 15px 15px 18px 15px;
   h3 {
    font-size: 2vw;
   }
   p {
    font-size: 1.7vw;
   }
  }
 }
}
@media (max-width: 600px) {
 .card {
  .info {
   padding: 15px 15px 18px 15px;
   h3 {
    font-size: 3vw;
   }
   p {
    font-size: 2vw;
   }
  }
 }
}
@media (max-width: 400px) {
 .card {
  .info {
   h3 {
    font-size: 4vw;
   }
   p {
    font-size: 3vw;
   }
  }
 }
}
</style>
