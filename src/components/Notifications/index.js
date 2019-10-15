import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  // estado para marzenar se as notificações estãp visíveis ou não
  const [visible, setVisible] = useState(false);

  function handleToglleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToglleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>bla bla</p>
            <time> ha 2 anos</time>
            <button type="button">Lida</button>
          </Notification>
          <Notification>
            <p>bla bla</p>
            <time> ha 2 anos</time>
            <button type="button">Lida</button>
          </Notification>
          <Notification>
            <p>bla bla</p>
            <time> ha 2 anos</time>
            <button type="button">Lida</button>
          </Notification>
          <Notification>
            <p>bla bla</p>
            <time> ha 2 anos</time>
            <button type="button">Lida</button>
          </Notification>
          <Notification>
            <p>bla bla</p>
            <time> ha 2 anos</time>
            <button type="button">Lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
