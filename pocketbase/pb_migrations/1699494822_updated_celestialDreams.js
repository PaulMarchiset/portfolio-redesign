/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jee98rpiijp7148")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qq2hvrsa",
    "name": "size",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "petit",
        "grand"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jee98rpiijp7148")

  // remove
  collection.schema.removeField("qq2hvrsa")

  return dao.saveCollection(collection)
})
