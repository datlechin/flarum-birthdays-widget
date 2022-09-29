import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('datlechin/flarum-birthdays-widget', () => {
  registerWidget(app);
  app.extensionData.for('datlechin-birthdays-widget').registerSetting({
    setting: 'datlechin-birthdays-widget.max_users',
    label: app.translator.trans('datlechin-birthdays-widget.admin.settings.max_users'),
    type: 'number',
  });
});
