/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erhfoxz0",
    "name": "videolink2",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // remove
  collection.schema.removeField("erhfoxz0")

  return dao.saveCollection(collection)
})
