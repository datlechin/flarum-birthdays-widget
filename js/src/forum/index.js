import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('datlechin/flarum-birthdays-widget', () => {
  registerWidget(app);
});
