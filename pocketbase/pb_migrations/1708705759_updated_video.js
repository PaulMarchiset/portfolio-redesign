/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "db4dhyqq",
    "name": "genre",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "aftermovie",
        "broadcast",
        "documentary",
        "press conference",
        "fiction"
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
    "id": "db4dhyqq",
    "name": "genre",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "broadcast",
        "documentary",
        "press conference",
        "fiction"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
