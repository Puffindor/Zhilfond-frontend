<template>
 <div class="side-bar">
  <div class="search">
   <p>Поиск сотрудников</p>
   <input
    type="text"
    placeholder="Введите Id или имя "
    v-model.trim="searchRequest"
   />
  </div>
  <div class="results">
   <p>Результаты</p>
   <ul v-if="searchRequest && search.size">
    <li v-for="user in search" :key="user.id">
     <user-card :user="user" />
    </li>
   </ul>
   <span v-if="!searchRequest">Начните поиск</span>

   <span v-if="searchRequest && search.size === 0">Ничего не найдено</span>
  </div>
 </div>
</template>

<script>
import UserCard from "./UserCard.vue";
export default {
 components: {
  UserCard,
 },
 data() {
  return {
   searchRequest: "",
  };
 },

 computed: {
  requestArray() {
   return this.searchRequest.split(",");
  },

  search() {
   //
   // Не совсем понял нужно ли было реализовывать поиск сразу нескольких элементов через запятую.
   // Но на всякий случай сделал, ниже оставил упрощенный вариант только с одним элементом.
   //
   let result = [];
   for (let element of this.requestArray) {
    this.$store.getters.getUsers.forEach((el) => {
     if (
      el.name.toLocaleLowerCase().includes(element.toLocaleLowerCase()) ||
      el.id === Number(element)
     ) {
      result.push(el);
     }
    });
   }
   return new Set(result);
  },
  //   search() {
  //    if (this.searchRequest) {
  //     return this.$store.getters.getUsers.filter(
  //      (el) =>
  //       el.name
  //        .toLocaleLowerCase()
  //        .includes(this.searchRequest.toLocaleLowerCase()) ||
  //       el.id === Number(this.searchRequest)
  //     );
  //    } else {
  //     return [];
  //    }
  //   },
 },
};
</script>

<style lang="scss" scoped>
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
.results {
 height: 80%;
}
.side-bar {
 padding: 27px 30px 0px 20px;
 grid-area: sideBar;
 border-right: 1px solid #e0e0e0;
 height: 100%;
}
p {
 font-weight: 600;
}
span {
 display: flex;
 font-weight: 400;
 font-size: 14px;
 margin-top: 10px;
}
.search {
 height: 10%;
 margin-bottom: 29px;
}
input {
 color: #76787d;
 font-size: 14px;
 font-weight: 400;
 padding: 0px 24px 0px 24px;
 width: 100%;
 height: 63%;
 margin-top: 14px;
 outline: none;
 border: 1.5px solid #e9ecef;
 border-radius: 8px;
}
ul {
 display: flex;
 flex-direction: column;
 overflow-y: auto;
 margin-top: 18px;
 list-style: none;
 width: 102%;
 height: 100%;
 padding-top: 5px;
 padding-left: 5px;
}
@media (max-width: 1000px) {
 .side-bar {
  padding: 27px 15px 0px 15px;
 }
}
@media (max-width: 600px) {
 .side-bar {
  display: flex;
  flex-direction: column;
  border-right: 0;
  border-bottom: 1px solid #e0e0e0;
  height: 100%;
 }
 ul {
  height: 85%;
 }
 input {
  height: 100%;
 }
 .results {
  margin-top: 10px;
  height: 70%;
 }
}
</style>
