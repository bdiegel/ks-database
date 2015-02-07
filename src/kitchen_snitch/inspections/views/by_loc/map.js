function (doc, meta) {
   if (doc.type && doc.type == "inspection") {
      emit([doc.place.location.lng, doc.place.location.lat], 
           { "date": doc.inspection.date, 
             "place": doc.place, 
             "inspection" : doc.inspection
           }
      );
   }
}
