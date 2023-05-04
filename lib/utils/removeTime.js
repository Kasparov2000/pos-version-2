function removeTime(date = new Date()) {
    if ( date instanceof String) date = new Date(date);
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }
  