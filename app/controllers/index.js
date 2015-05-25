/* global $ */

import Ember from 'ember';

export default Ember.Controller.extend({
  params: {
    argOne: undefined,
    argTwo: "default value",
    argThree: true
  },

  init: function() {
    // #ember-wrapper is defined in the static html by the embedder.
    var emberWrapper = $('#ember-wrapper')[0];
    var paramsKey = Object.keys(this.get('params'));
    paramsKey.forEach(function(paramKey) {
      var arg = $(emberWrapper).data(paramKey.dasherize());
      if (arg !== undefined) {
        this.set(`params.${paramKey}`, arg);
      }
    // Set scope of this within the forEach iterator.
    }, this);
  },
});
