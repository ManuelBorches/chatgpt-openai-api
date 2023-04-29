export const formatInfoItem = (title: string, infoItem: string) => {
  const withQuotes = title === 'Example';
  return withQuotes ? <p> &quot; infoItem &quot; </p> : infoItem;
};
