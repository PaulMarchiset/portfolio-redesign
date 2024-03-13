/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ns6uyswvtvep7m0")

  // remove
  collection.schema.removeField("1hrmxgtj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ns6uyswvtvep7m0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hrmxgtj",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
