/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgjdoahq",
    "name": "softwares",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "Figma",
        "Illustrator",
        "InDesign",
        "After Effects",
        "Fontlab 7",
        "Photoshop",
        "Premiere Pro",
        "Dimension"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("464cx35m4fn2ygk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgjdoahq",
    "name": "softwares",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "Figma",
        "Illustrator",
        "InDesign",
        "After Effects",
        "Fontlab 7",
        "Photoshop",
        "Premiere Pro"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
