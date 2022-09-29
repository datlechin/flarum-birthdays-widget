import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import BirthdaysWidget from './components/BirthdaysWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'birthdays',
      component: BirthdaysWidget,
      isDisabled: false,
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'datlechin-birthdays-widget');
}
