const swig = require('swig-templates');
const yaml = require('yaml');

(async () => {
  const template = swig.compileFile(__dirname + '/presets/node@12/spec.yaml');
  const result = template({
    name: 'myapp',
    options: {
      size: '1Gi',
      port: [9000, 9999],
      env: [
        {
          name: 'NODE_ENV',
          value: 'production'
        },
        {
          name: 'number',
          value: 100
        }
      ]
    }
  });

  console.log(result);
  const docs = yaml.parseAllDocuments(result);
  docs.forEach((doc) => console.log(JSON.stringify(doc.toJSON(), null, 2)));
})();
