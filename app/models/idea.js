import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class IdeaModel extends Model {
  @attr summary;
  @attr quote;
}
