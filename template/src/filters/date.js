// 这里放置一些Vue自定义Filter
export const formatDate = time => {
  if(time){
    let tmpDate = new Date(time)
    let year = tmpDate.getFullYear()
    let mathon = tmpDate.getMonth() + 1
    if (mathon < 10){
      mathon = '0' + mathon
    }
    let day = tmpDate.getDate()
    if ( day < 10 ){
      day = '0' + day
    }
    return year + '-' + mathon + '-' + day
  }
  else {
    return ''
  }
}

export const formatTime =  time => {
  if(time == null || time == ''){
    return ''
  }
  let tmpDate = new Date(time)
  let year = tmpDate.getFullYear()
  let mathon = tmpDate.getMonth() + 1
  if (mathon < 10){
    mathon = '0' + mathon
  }
  let day = tmpDate.getDate()
  if ( day < 10 ){
    day = '0' + day
  }
  let hours = tmpDate.getHours()
  if ( hours < 10 ){
    hours = '0' + hours
  }
  let minutes = tmpDate.getMinutes()
  if ( minutes < 10 ){
    minutes = '0' + minutes
  }
  return year + '-' + mathon + '-' + day + ' ' + hours + ':' + minutes
}
