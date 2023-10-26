import pool from "../db.js"

const getAllPembelian = async (req,res) => {
    const result = await pool.query("call getAllPembelian();")
    res.send(await result[0][0])
};

const getPembelianById = async (req,res) => {
    const {id} = req.params;
    const result = await pool.query("call getPembelianById(?);",[id])
    res.send(await result[0][0])
};

const createPembelian = async (req, res) => {
    const { name, age, contact, email } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call CreatePembelian(?,?,?,?)", [name, age, contact, email]);
        res.status(201).json({ message: 'Pelanggan berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat pelanggan', error: error.message });
    }
};

const updatePembelian = async (req, res) => {
    try {
        const { id, name, age, contact, email } = req.body;
        const result = await pool.query('call UpdatePembelian(?,?,?,?,?)',[id,name,age,contact,email]);
        res.status(200).json({ message: 'Data pelanggan berhasil diperbarui' });
    } catch (error) {
        console.error("Kesalahan saat memperbarui pelanggan:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui pelanggan', error: error.message });
    }
};

const deletePembelianById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call DeletePembelian(?) ;",[id]);
        res.status(201).json({ message: 'Pelanggan berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pelanggan', error: error.message });
    }
    
};

export {
    getAllPembelian,
    createPembelian,
    getPembelianById,
    deletePembelianById,
    updatePembelian
};
