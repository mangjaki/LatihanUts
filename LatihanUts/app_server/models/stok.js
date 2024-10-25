let mongoose = require("mongoose");

let schemaStok = new mongoose.Schema({
    //produk_id: ObjectId,

    jumlah :Number,


    tanggal_update : Date,


    keterangan : 
        String,


    lokasi : 
         String,

});

mongoose.model('Stok', schemaStok);