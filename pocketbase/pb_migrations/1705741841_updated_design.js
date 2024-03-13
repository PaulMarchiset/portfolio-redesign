/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubjp9xrn",
    "name": "secondary_image",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // remove
  collection.schema.removeField("ubjp9xrn")

  return dao.saveCollection(collection)
})
