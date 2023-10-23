import pool from "../db.js"

const getAllSupplier = async (req,res) => {
    const result = await pool.query("call getAllSupplier();")
    res.send(await result[0][0])
};

export {
    getAllSupplier
};
