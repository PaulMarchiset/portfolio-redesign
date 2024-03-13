/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmby85z0",
    "name": "video",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3yov199j",
    "name": "score",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // remove
  collection.schema.removeField("nmby85z0")

  // remove
  collection.schema.removeField("3yov199j")

  return dao.saveCollection(collection)
})
