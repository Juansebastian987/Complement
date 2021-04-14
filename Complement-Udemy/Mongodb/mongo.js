db.products.insert({"name":"laptop"})
db.createCollection("users")
db.help()
db.products.drop()

cls 

show collections

db.products.insert({"name":"laptop"})
db.createCollection("users")
db.help()
db.products.drop()

db.products.find()
db.products.find().pretty()
db.products.find().limit(3)
db.products.find({"nombre":"mouse"}).pretty()
db.products.find().forEach(product => print("Product name: "+ product.nombre))

db.products.findOne({"nombre":"mouse"})
db.products.findOne({"nombre":"mouse"}).sort({name:1})
db.products.findOne({"nombre":"mouse"}, {"name":1, "precio":1})

db.products.count()

db.products.update({"nombre":"mouse"},{"price":999.9999})
db.products.update({"nombre":"mouse"},{$set: {"description": "Gaming desktop"}},{upsert:true})
db.products.update({"nombre":"mouse"},{$inc: {"price": 10000}})
db.products.update({"nombre":"mouse"},{$rename:{"nombre":"name"}}} )

db.products.remove({"name":"mouse"})
db.products.remove({})
{
    "nombre": "mouse",
    "precio": 40.2,
    "active": false,
    "create_at": new Date("12/12/1999")
}