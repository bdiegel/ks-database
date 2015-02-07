function (doc, meta) {
   if (doc.type && doc.type == "inspection") {
      emit(doc.place.place_id, 
           { "date": doc.inspection.date, 
             "place": doc.place, 
             "inspection" : doc.inspection
           }
      );
   }
}
