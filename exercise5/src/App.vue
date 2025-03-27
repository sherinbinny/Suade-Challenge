<template>
  <div class="container">
    <h2>Exercise 5</h2>
    <h4>Statement</h4>
    <div class="statement">
      <p>
        Please implement the 2 empty functions from <span class="code">helpers/helpers.js</span>: <span class="code">getValueAtPath</span> and
        <span class="code">groupByKey</span>.
      </p>
      <p>
        Check their usage in <span class="code">App.js</span> to understand the specs.
      </p>
    </div>
    <h4>Solution</h4>
    <div class="solution">

      <h5>Gender</h5>
      <p v-if="genderGroups">Male: {{ parseInt(genderGroups.male * 100) }}%, Female: {{ parseInt(genderGroups.female * 100) }}%</p>

      <h5>Table</h5>
      <table>
        <thead>
          <tr>
            <th v-for="col in columns" :key="col">{{ col.split('.').slice(-1)[0] }}</th>
          </tr>
        </thead>
        <tr v-for="item in people" :key="item._id">
          <th v-for="col in columns" :key="col">{{ getValueAtPath(item, col) }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

  import helpers from './helpers/helpers';

  export default {
    data() {
      return {
        people: [],
        columns: ['age', 'name', 'gender', 'preferences.fruit', 'preferences.pet'],
      };
    },
    computed: {
      genderGroups() {
        return this.groupByKey(this.people, 'gender');
      },
    },
    methods: {
      ...helpers,
    },
    created() {
      fetch('https://suade.org/filehosting/challenges/people.json')
        .then((response)=>response.json())
        .then((people)=>this.people = people);
    },
  };


</script>

<style lang="scss">

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

.container
{
  padding: 20px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h2,
h4,
h5
{
  color: #333;
}

h2
{
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

h4
{
  font-size: 1.5rem;
  margin-bottom: 10px;
}

h5
{
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

p
{
  font-size: 1rem;
  color: #555;
}

table
{
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 1rem;
  text-transform: capitalize;
}

th,
td
{
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th
{
  color: #333;
}

thead th
{
  background-color: #e0e0e0;
}

tr:nth-child(even)
{
  background-color: #f4f4f4;
}

tr:nth-child(odd)
{
  background-color: #f9f9f9;
}

</style>
