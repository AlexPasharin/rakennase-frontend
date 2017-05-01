export const weekDay = (date, lang) => {
  return (lang === 'us') ?  //weekday of the first date of month,
    date.day():
    date.isoWeekday() - 1 //iso refers to european standars, week starts at Monday
}

export const checkTime = (time) => {
  if(!time.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3])[: \.][0-5][0-9]$/)){
    return false
  }
  // time is now of the right form and we add leading 0 in case it's in the form e.g. 8:00
  if(time[1].match(/[: \.]/)){
    time = "0" + time
  }
  // substitute possible : with .
  time = time.substring(0, 2) + "." + time.substring(3)

  return time
}
