/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // remove
  collection.schema.removeField("xa8tqzdo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xa8tqzdo",
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
})
