function(key, values, rereduce) {
   var recent = values[0];
   for (i=1; i < values.length; i++) {
      var next = values[i];
      var d1 = new Date(recent.date[0], recent.date[1]-1, recent.date[2],0,0,0,0);
      var d2 = new Date(next.date[0], next.date[1]-1, next.date[2],0,0,0,0);
      if (d1.getTime() < d2.getTime()) {
         recent = next;
      }
   }
   return(recent);
}
