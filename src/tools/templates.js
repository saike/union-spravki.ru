import _ from 'lodash';

export let GlobalTemplateContext = {

  context: {},

  add: (merged) => {
    _.merge(GlobalTemplateContext.context, merged);
  }


};