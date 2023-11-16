import pool from "../db.js"

const getAllKategori= async (req,res) => {
    const result = await pool.query("call getAllKategori();")
    res.send(await result[0][0])
};

const getKategoriById = async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query("call getKategoriById(?);",[id])
        res.send(await result[0][0])
    } catch (error){
        res.status(500).json({ message: 'Tidak ada Kategori sesuai id', error: error.message });
    }
    
    
};

const createKategori = async (req, res) => {
    const { nama } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call CreateKategori(?)", [nama]);
        res.status(201).json({ message: 'Kategori berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat Kategori', error: error.message });
    }
};

const updateKategori = async (req, res) => {
    const {id} = req.params;
    try {
        const { nama } = req.body;
        const result = await pool.query('call UpdateKategori(?,?)',[id, nama]);
        res.status(200).json({ message: 'Data Kategori berhasil diperbarui' });
    } catch (error) {
        console.error("Kesalahan saat memperbarui pelanggan:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui Kategori', error: error.message });
    }
};

const deleteKategoriById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call DeleteKategori(?) ;",[id]);
        res.status(201).json({ message: 'Kategori berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus kategori', error: error.message });
    }
    
};

export {
    getAllKategori,
    getKategoriById,
    createKategori,
    updateKategori,
    deleteKategoriById
};
