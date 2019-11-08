import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  // estado para armazenar se as notificações estão visíveis ou não
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.created_at),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          }
        ),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);
  // esta função marca a notificação como lida e virse versa
  function handleToglleVisible() {
    setVisible(!visible);
  }

  async function handleMarkeAsRead(id) {
    await api.put(`notifications/${id}`);
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToglleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification.id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance} </time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkeAsRead(notification.id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
