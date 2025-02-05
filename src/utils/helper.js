function formatDate(pdate) {
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const date = new Date(pdate);
  return date.toLocaleDateString(undefined, options);
}

export {formatDate};
