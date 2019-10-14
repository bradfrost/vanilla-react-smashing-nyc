module.exports = plop => {
  plop.setHelper('upperCase', txt => txt.toUpperCase());

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component/Component.js.hbs'
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/Component/Component.stories.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'plop-templates/Component/Component.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs'
      },
      {
        type: 'append',
        pattern: /;\n$/,
        separator: '',
        path: 'src/index.js',
        template:
          "export { default as {{pascalCase name}} } from './components/{{pascalCase name}}';"
      },
      function sortIndex() {
        process.chdir(plop.getPlopfilePath());

        const fs = require('fs');
        const indexFile = `${plop.getDestBasePath()}/src/index.js`;

        if (fs.existsSync(indexFile)) {
          const nameRegex = /default as ([^\s]*)/;
          const sorted = fs
            .readFileSync(indexFile, 'utf8')
            .split(';\n')
            .sort((a, b) => {
              const aName = a.match(nameRegex)[1];
              const bName = b.match(nameRegex)[1];
              return aName.localeCompare(bName);
            })
            .join(';\n');
          fs.writeFileSync(indexFile, sorted + ';\n');
          return `/src/index.js lines sorted`;
        }
      }
    ]
  });

  plop.setGenerator('page', {
    description: 'Create a page template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Page/Page.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/Page/Page.stories.js.hbs'
      }
    ]
  });
};
