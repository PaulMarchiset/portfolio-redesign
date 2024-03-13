/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // remove
  collection.schema.removeField("zy9dzpzr")

  // remove
  collection.schema.removeField("wzrzhuwv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qudglgmb",
    "name": "skills",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "webdesign",
        "front-end",
        "back-end"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zy9dzpzr",
    "name": "designer",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wzrzhuwv",
    "name": "cover_image",
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

  // remove
  collection.schema.removeField("qudglgmb")

  return dao.saveCollection(collection)
})
