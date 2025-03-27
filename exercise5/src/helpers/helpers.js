export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key)
  {
    // TODO: implement logic here
    const total = array.length;
    const counts = array.reduce((acc, obj) => 
    {
      const keyValue = obj[key];
      acc[keyValue] = (acc[keyValue] || 0) + 1;
      return acc;
    }, {});

    // Convert counts to percentages
    return Object.keys(counts).reduce((acc, key) => {
      acc[key] = counts[key] / total;
      return acc;
    }, {});
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none')
  {
    // TODO: implement logic here
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || defaultValue;
  },
};
