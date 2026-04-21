import { useState } from "react";
import NotificationContext from "@context/NotificationContext";
function NotificationProvider({ children }) {
  const [notificationMessage, setNotificationMessage] = useState("");
  return (
    <NotificationContext
      value={{ notificationMessage, setNotificationMessage }}
    >
      {children}
    </NotificationContext>
  );
}

export default NotificationProvider;
