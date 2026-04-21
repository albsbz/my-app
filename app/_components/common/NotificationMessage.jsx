"use client";

import { useContext, useEffect } from "react";
import NotificationContext from "@context/NotificationContext";

function NotificationMessage() {
  const { notificationMessage, setNotificationMessage } =
    useContext(NotificationContext);

  useEffect(() => {
    if (!notificationMessage) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setNotificationMessage("");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notificationMessage, setNotificationMessage]);

  if (!notificationMessage) {
    return null;
  }

  return (
    <div className="bg-green-500 text-white p-2 rounded text-center transition-opacity duration-200 absolute top-0 z-20 w-full">
      {notificationMessage}
    </div>
  );
}

export default NotificationMessage;
