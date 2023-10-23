import pool from "../db.js"

const getAllProdukSupplier = async (req,res) => {
    const result = await pool.query("call getAllProdukSupplier();")
    res.send(await result[0][0])
};

export {
    getAllProdukSupplier
};
