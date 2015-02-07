function (doc, meta) {
   if (doc.doctype && doc.doctype == "inspection") {
      emit([doc.place.location.lng, doc.place.location.lat], 
           { "date": doc.inspection.date, 
             "place": doc.place, 
             "inspection" : doc.inspection
           }
      );
   }
}
