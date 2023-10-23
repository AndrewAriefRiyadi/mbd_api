import pool from "../db.js"

const getAllPembelian = async (req,res) => {
    const result = await pool.query("call getAllPembelian();")
    res.send(await result[0][0])
};

export {
    getAllPembelian
};
