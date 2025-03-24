<template>
  <!-- Added proper indentation for better readability-->
  <div class="app-container">
    <h2>Exercise 1</h2>
    <h4>Statement</h4>
    <div class="statement">
      <p>
        Please update the template and logic to ensure you don't get any VueJS warnings in the console, or build warnings.
      </p>
      <p>
        If anything else looks odd to you, feel free to update it for it to match best practices!
      </p>
    </div>
    <h4>Solution</h4>
    <div class="solution">
      <div class="person-wrapper">
        <!-- Added a unique identifier (_id) as the key to track each item in the list -->
        <PersonCard v-for="person in people" :key="person._id" :person="person" class="person-card" :personClick="alertBox"/>
      </div>
      <div class="summary">{{people.length}} persons cards displayed</div>
    </div>
  </div>
</template>

<script>

  import PersonCard from './components/PersonCard';
  import people from './assets/people.json';

  export default {
    name: 'App',
    components: {PersonCard},
    data() {
      return {
        people: people,
      };
    },
    methods: {
      alertBox(person) {
        alert('You clicked on ' + person.name);
      },
    },
  };

</script>

<style lang="scss">
  /* Added more styling to enhance the appearance and layout of the app */
  .app-container
  {
    padding: 20px;
  }

  .person-wrapper
  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
    .person-card
    {
      width: 300px;
      margin: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease-in-out;
    }

    .person-card:hover
    {
      transform: scale(1.05);
    }

    .summary
    {
      text-align: center;
      clear: both;
    }

    .statement, .solution
    {
      border: 1px solid #dedede;
      padding: 0 0.5em;
      min-height: 40px;

      .code
      {
        color: #434343;
        background-color: #f9f9f9;
        padding: 0 5px;
      }
    }

</style>
