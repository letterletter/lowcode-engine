const fs = require('fs')
const parse = require('../lib').default;

(async () => {
  const options = {
    entry: './component.tsx',
    accesser: 'local',
  };

  const actual = await parse(options);
  fs.writeFile('./component-tsx-material.json', JSON.stringify(actual, null, 2), () => console.log('okk'))

  console.log(JSON.stringify(actual, null, 2));
})();
