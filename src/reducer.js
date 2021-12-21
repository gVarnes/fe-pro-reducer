function reducer(input, action) {
  // Ваше решение тут
  switch (action) {
    case 'upperCase':
      return string.toUpperCase();


    case 'lowerCase':
      return string.toLowerCase();
    case 'capitalize':
      const arrayWithWords = string.split(' ');
      return arrayWithWords.map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
    // return string.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
    // return capitalize(string);
    default:
      return string;
  }
}

module.exports = reducer;
