/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8tzdyt1l",
    "name": "colormatte1",
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
    "id": "uetycjz3",
    "name": "colormatte2",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // remove
  collection.schema.removeField("8tzdyt1l")

  // remove
  collection.schema.removeField("uetycjz3")

  return dao.saveCollection(collection)
})
