import pool from "../db.js"

const getAllPembelian = async (req,res) => {
    const result = await pool.query("call getAllPembelian();")
    res.send(await result[0][0])
};

const getPembelianById = async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query("call getPembelianById(?);",[id])
        res.send(await result[0][0])
    } catch (error){
        res.status(500).json({ message: 'Tidak ada Pembelian sesuai id', error: error.message });
    }
    
    
};

const createPembelian = async (req, res) => {
    const { id_customer, id_produk_supplier, banyak, status_pembayaran } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call createPembelian(?,?,?,?)", [id_customer, id_produk_supplier, banyak, status_pembayaran]);
        res.status(201).json({ message: 'Pembelian berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat pembelian', error: error.message });
    }
};


const deletePembelianById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call deletePembelian(?) ;",[id]);
        res.status(201).json({ message: 'Pembelian berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pembelian', error: error.message });
    }
    
};

export {
    getAllPembelian,
    createPembelian,
    getPembelianById,
    deletePembelianById
};
