import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NewIdeaFormComponent extends Component {
  @service store;

  @action
  saveIdea(event) {
    event.preventDefault();
    this.store
      .createRecord('idea', {
        summary: this.summary,
        quote: this.quote,
      })
      .save();
  }
}
