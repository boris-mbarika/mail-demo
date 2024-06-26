export const getMessagesCountInfo = (messages) => {
  let readCount = 0;
  let unreadCount = 0;

  for (const msg of messages) {
    if (msg.isRead) readCount++;
    else unreadCount++;
  }

  return { readCount, unreadCount, total: readCount + unreadCount };
};

export const truncateText = (text, maxLength)=> {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
