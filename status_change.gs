function status_change(e){
  var range = e.range;
  var time = new Date();
  var name = Session.getActiveUser().getEmail();
  var current_user = name.substring(0, name.indexOf("@"));
  month = time.getMonth() + 1;
  output = 'Last edited by:\n' + current_user + '\n\nat\n\n' + month + '/' + time.getDate() + '\n' + time.getHours() + ':' + time.getMinutes() + ' (UTC)';
  range.setNote(output);
}
