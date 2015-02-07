function (doc, meta) {
   if (doc.doctype && doc.doctype == "inspection") {
      emit(doc.place.place_id, 
           { "date": doc.inspection.date, 
             "place": doc.place, 
             "inspection" : doc.inspection
           }
      );
   }
}
