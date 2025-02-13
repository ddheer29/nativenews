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

function formatPublishedDate(dateString) {
  const date = new Date(dateString);
  
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  
  return date.toLocaleDateString('en-US', options);
}

export {formatDate, formatPublishedDate};
