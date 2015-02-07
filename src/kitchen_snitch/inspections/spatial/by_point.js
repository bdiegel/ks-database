function (doc, meta) {
   emit({ type: "Point", coordinates: [doc.place.location.lat, doc.place.location.lng] },
        doc.inspection);
}
