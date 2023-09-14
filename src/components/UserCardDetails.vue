<template>
 <div class="user-card" v-if="this.$store.getters.getSelectedUser">
  <img src="../assets/palaceholder-large.png" />
  <div class="info">
   <h1>{{ this.$store.getters.getSelectedUser.name }}</h1>
   <p><span>Email:</span> {{ this.$store.getters.getSelectedUser.email }}</p>
   <p><span>Телефон</span> {{ this.$store.getters.getSelectedUser.phone }}</p>
   <h2>О себе:</h2>
   <p class="about">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus
    sit amet luctus. Vitae congue eu consequat ac felis donec et odio
    pellentesque. Dapibus ultrices in iaculis nunc sed. Proin sagittis nisl
    rhoncus mattis rhoncus. Mattis enim ut tellus elementum sagittis vitae et
    leo. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Vitae
    tortor condimentum lacinia quis. Odio aenean sed adipiscing diam donec
    adipiscing. Velit scelerisque in dictum non consectetur a erat nam. Nunc
    lobortis mattis aliquam faucibus purus in massa tempor. Ac felis donec et
    odio pellentesque diam. Proin libero nunc consequat interdum varius.
    Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt.
    Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.
    Quam lacus suspendisse faucibus interdum. Iaculis at erat pellentesque
    adipiscing commodo elit at. Duis at consectetur lorem donec massa sapien
    faucibus. Sed elementum tempus egestas sed sed risus pretium quam.
   </p>
  </div>
 </div>
 <div v-else class="placeholder">
  <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
 </div>
</template>

<script>
export default {
 computed: {
  user() {
   return this.$store.getters.getSelectedUser;
  },
 },
};
</script>
<style lang="scss" scoped>
.placeholder {
 text-align: center;
 display: flex;
 width: 100%;
 height: 100%;
 justify-content: center;
 align-items: center;
 p {
  color: #76787d;
  font-size: 14px;
  font-weight: 400;
 }
}
.user-card {
 display: flex;
 grid-area: userCard;
 padding: 30px 30px 30px 20px;
 h1 {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
 }
 p {
  font-size: 14px;
  margin-bottom: 10px;
  span {
   font-weight: 600;
  }
 }
 img {
  width: 50%;
  height: 50%;
  margin-right: 60px;
 }
 h2 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 25px;
 }
}
.info {
 flex-direction: column;
 display: flex;
}
@media (max-width: 1600px) {
 .user-card {
  .about {
   overflow: auto;
  }
  img {
   width: 100%;
   height: 40%;
   margin-right: 20px;
  }
 }
}
@media (max-width: 1200px) {
 .user-card {
  flex-direction: column;
  h2 {
   font-size: 1.7vw;
   margin-bottom: 15px;
  }
  p {
   font-size: 1.4vw;
  }
  img {
   width: 100%;
   height: 30%;
   margin-right: 10px;
   margin-bottom: 20px;
  }
 }
}
@media (max-width: 750px) {
 .user-card {
  padding: 30px 15px 15px 15px;
  p {
   font-size: 0.7rem;
  }
  h2 {
   font-size: 0.9rem;
  }
  .about {
   overflow: auto;
   display: block;
   font-size: 0.7rem;
  }
 }
}
@media (max-width: 600px) {
 .user-card {
  p {
   font-size: 0.9rem;
  }

  h2,
  h1 {
   font-size: 1rem;
  }
  .about {
   overflow: auto;
   display: block;
   font-size: 0.9rem;
  }
 }
}
</style>
