import pool from "../db.js"

const getAllKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

const getKategoriById= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

const createKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

const updateKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

const deleteKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

export {
    getAllKategori,
    getKategoriById,
    createKategori,
    updateKategori,
    deleteKategori
};
