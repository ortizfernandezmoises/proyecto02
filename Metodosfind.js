db.ordenadoress.find({})
db.ordenadoress.find ({"objeto": "OMEN"})
db.ordenadoress.find ({"objeto": {$eq: "Mac"}})
db.ordenadoress.find ({"cantidad": {$gt: 25}})
db.ordenadoress.find ({ estado: {$in:["D", "N"]}})
db.ordenadoress.find( { estado: "D", cantidad: { $lt: 19 } } )
db.ordenadoress.find( { $or: [ { estado: "N" }, { qty: { $lt: 25 } } ] } )
db.ordenadoress.find( {
    estado: "N",
    $or: [ { cantidad: { $lt: 30 } }, { objeto: /^p/ } ]
} )
