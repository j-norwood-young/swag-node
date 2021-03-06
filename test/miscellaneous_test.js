// Generated by CoffeeScript 2.5.1
(function() {
  var Handlebars, Swag;

  require('should');

  Handlebars = require('handlebars');

  Swag = require('../lib/swag');

  Swag.registerHelpers(Handlebars);

  describe('default', function() {
    return describe('{{default title "Not title available."}}', function() {
      return it('should provide a default or fallback value if a value doesn\'t exist.', function() {
        var context, source, template;
        source = '{{default title "No title available."}}';
        template = Handlebars.compile(source);
        context = {
          title: null
        };
        return template(context).should.equal('No title available.');
      });
    });
  });

  Swag.Config.partialsPath = '../test/templates/';

  describe('partial', function() {
    beforeEach(function() {
      return delete Swag.Handlebars.partials["some_template"];
    });
    describe('{{partial name data template}}', function() {
      return it('should register and render a partial.', function() {
        var context, source, template;
        context = {
          data: {
            text: 'yay'
          },
          template: 'A partial {{text}}.'
        };
        source = '{{partial "some_template" data template}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('A partial yay.');
      });
    });
    return describe('{{partial name}}', function() {
      return it('should register and render a partial.', function() {
        var source, template;
        source = '{{partial "some_template"}}';
        template = Handlebars.compile(source);
        return template().should.equal('A partial.');
      });
    });
  });

}).call(this);
