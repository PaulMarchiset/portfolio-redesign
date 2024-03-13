/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vwerwkr8ss31pnq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbxpadsx",
    "name": "role",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "Filmmaker",
        "Editor",
        "Graphic Designer",
        "TV Director",
        "Coloris",
        "VFX"
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
    "id": "qbxpadsx",
    "name": "role",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "Filmaker",
        "Video Editor",
        "Graphic Designer",
        "TV Director"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
