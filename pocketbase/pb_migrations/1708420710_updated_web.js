/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jquizyc4",
    "name": "development",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "VueJS",
        "TailwindCSS",
        "Pocketbase",
        "Wordpress",
        "HTML",
        "CSS",
        "JS",
        "FIgma"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlkrjg6p0m921x2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jquizyc4",
    "name": "development",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "VueJS",
        "TailwindCSS",
        "Pocketbase",
        "Wordpress",
        "HTML",
        "CSS",
        "JS"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
