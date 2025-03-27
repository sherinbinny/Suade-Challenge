<template>
  <div class="app-container">
    <h2>Exercise 4</h2>
    <h4>Statement</h4>
    <div class="statement">
      <p>
        Please update <span class="code">App.vue</span> in order to display a list
        of people aged from 25 to 35 years old, from the youngest to the oldest.
      </p>
      <p>
        Use Vuex store <span class="code">store/store.js</span> to retrieve the list
        of people, use the component <span class="code">components/List.vue</span>
        to display people's age and name, make use of the props and slot, use the
        functions in <span class="code">helpers/helpers.js</span> to filter and sort
        the data.
      </p>
    </div>
    <h4>Solution</h4>
    <div class="solution">
      <!-- TODO: implement template here -->
      <div class="header-row">
        <span class="header-item">Name</span>
        <span class="header-item">Age</span>
        <span class="header-item">Eye Color</span>
        <span class="header-item">Gender</span>
      </div>
      <List :data="people" :filtering="filterByAge(25, 35)" :sorting="sortByAge">
        <template v-slot:default="{ item }">
          <div class="list-row">
            <span class="list-item">{{ item.name }}</span>
            <span class="list-item">{{ item.age }}</span>
            <span class="list-item">{{ item.eyeColor }}</span>
            <span class="list-item">{{ item.gender }}</span>
          </div>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
  // TODO: implement logic here
  import { mapState, mapActions } from 'vuex';
  import List from './components/List.vue';
  import helpers from './helpers/helpers.js';

  export default {
    name: 'App',
    components: {
      List,
    },
    computed: {
      ...mapState(['people']),
    },
    methods: {
      ...mapActions(['getPeople']),
      filterByAge(minAge, maxAge) {
        return helpers.filterByAge(minAge, maxAge);
      },
      sortByAge(a, b) {
        return helpers.sortByAge(a, b);
      },
    },
    created() {
      this.getPeople();
    },
  };
</script>

<style lang="scss">

  .app-container
  {
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;

    .header-row, .list-row
    {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background-color: #f8f8f8;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }

    .header-row
    {
      background-color: #e0e0e0;
    }

    .list-row
    {
      font-weight: normal;
    }

    .header-item,
    .list-item
    {
      flex: 1;
      padding: 10px;
      text-align: left;
    }

    .list-item
    {
      text-align: left;
      text-transform: capitalize;
    }

    h2,
    h4
    {
      color: #333;
    }

    .solution
    {
      margin-top: 20px;
    }
  }
</style>
