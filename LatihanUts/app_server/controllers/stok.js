const mongoose = require("mongoose");
const Stok = mongoose.model("Stok");

const index = (req, res, next) => {
    Stok.find({}, { __v: 0 })
      .then((stk) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: stk
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Failed"
        };
        res.status(400).json(responseMessage);
      });
};

const insert = (req, res, next) => {
    const stk = new Stok({
      //produk_id: req.body.produk_id,
      jumlah: req.body.jumlah,
      tanggal_update: req.body.tanggal_update,
      keterangan: req.body.keterangan,
      lokasi: req.body.lokasi,
    });
  
    stk
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Failed"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = {
    index,insert
}