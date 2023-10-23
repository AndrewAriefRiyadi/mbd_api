import pool from "../db.js"

const getAllKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

export {
    getAllKategori
};
