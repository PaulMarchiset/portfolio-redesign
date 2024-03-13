/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ns6uyswvtvep7m0")

  // remove
  collection.schema.removeField("h92dgqoz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vl82dnhb",
    "name": "size",
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
  const collection = dao.findCollectionByNameOrId("ns6uyswvtvep7m0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h92dgqoz",
    "name": "size",
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

  // remove
  collection.schema.removeField("vl82dnhb")

  return dao.saveCollection(collection)
})
