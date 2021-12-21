function reducer(input, action) {
  // Ваше решение тут
  switch (action) {
    case 'upperCase':
      return input.toUpperCase();


    case 'lowerCase':
      return input.toLowerCase();
    case 'capitalize':
      const arrayWithWords = input.split(' ');
      return arrayWithWords.map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
    // return input.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
    // return capitalize(input);
    default:
      return input;
  }
}

module.exports = reducer;
