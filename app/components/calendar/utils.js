export const weekDay = (date, lang) => {
  return (lang === 'us') ?  //weekday of the first date of month,
    date.day():
    date.isoWeekday() - 1 //iso refers to european standars, week starts at Monday
}
