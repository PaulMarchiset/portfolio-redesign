/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlaqu8ht",
    "name": "softwares",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlaqu8ht",
    "name": "softwares",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Premiere Pro",
        "After Effects",
        "BlackMagic"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
