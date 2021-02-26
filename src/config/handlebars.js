const Handlebars = require('handlebars/runtime');
const JustHandlebarsHelpers = require('just-handlebars-helpers');
// Register just-handlebars-helpers with handlebars
Handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
});
Handlebars.registerHelper("setVar", function(varName, varValue, options) {
  options.data.root[varName] = varValue;
});

JustHandlebarsHelpers.registerHelpers(Handlebars);

module.exports = Handlebars;