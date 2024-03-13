/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhzjvww5",
    "name": "video_deskotp",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r7y4kjmn",
    "name": "video_mobile",
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
  collection.schema.removeField("qhzjvww5")

  // remove
  collection.schema.removeField("r7y4kjmn")

  return dao.saveCollection(collection)
})
