import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Tooltip from 'flarum/common/components/Tooltip';
import Link from 'flarum/common/components/Link';
import avatar from 'flarum/common/helpers/avatar';

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
export default class BirthdaysWidget extends Widget {
  oninit(vnode) {
    super.oninit(vnode);

    this.birthdays = [];

    this.load();
  }

  className() {
    return 'BirthdaysWidget';
  }

  icon() {
    return 'fas fa-birthday-cake';
  }

  title() {
    return app.translator.trans('datlechin-birthdays-widget.forum.widget.title');
  }

  content() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="Datlechin-BirthdaysWidget-users">
        {this.birthdays.map((user) => (
          <div className="Datlechin-BirthdaysWidget-users-item">
            <div className="Datlechin-BirthdaysWidget-users-item-avatar">
              <Tooltip text={user.displayName()}>
                <Link href={app.route.user(user)}>{avatar(user)}</Link>
              </Tooltip>
            </div>
            <div className="Datlechin-BirthdaysWidget-users-item-name">
              <Link href={app.route.user(user)}>{user.displayName()}</Link>
            </div>
          </div>
        ))}
        <div className="Datlechin-BirthdaysWidget-more">
          <Link href={app.route('birthdays')}>{app.translator.trans('datlechin-birthdays-widget.forum.widget.more_label')}</Link>
        </div>
      </div>
    );
  }

  load() {
    const today = new Date().toISOString().slice(0, 10);
    app.store
      .find('users', {
        filter: {
          birthday: today,
        },
        page: {
          limit: app.forum.attribute('datlechin-birthdays-widget.maxUsers'),
        },
      })
      .then((users) => {
        this.setResults(users);
      });
  }

  setResults(users) {
    this.birthdays = users;
    this.loading = false;
    m.redraw();
  }
}
