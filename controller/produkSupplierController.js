import pool from "../db.js"

const getAllProdukSupplier = async (req,res) => {
    const result = await pool.query("call getAllProdukSupplier();")
    res.send(await result[0][0])
};

const getProdukSupplierById = async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query("call getProdukSupplierById(?);",[id])
        res.send(await result[0][0])
    } catch (error){
        res.status(500).json({ message: 'Tidak ada ProdukSupplier sesuai id', error: error.message });
    }
    
    
};

const createProdukSupplier = async (req, res) => {
    const { supplierID, productName, unit, price, stock, category_id } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call CreateProdukSupplier(?,?,?,?,?,?)", [supplierID, productName, unit, price, stock, category_id]);
        res.status(201).json({ message: 'Produk Supplier berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat produk supplier', error: error.message });
    }
};

const updateProdukSupplier = async (req, res) => {
    try {
        const { id,supplierID, productName, unit, price, stock, category_id } = req.body;
        const result = await pool.query('call UpdateProdukSupplier(?,?,?,?,?,?,?)', [id, supplierID, productName, unit, price, stock, category_id]);
        res.status(200).json({ message: 'Data Produk Supplier berhasil diperbarui' });
    } catch (error) {
        console.error("Kesalahan saat memperbarui pelanggan:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui produk Supplier', error: error.message });
    }
};

const deleteProdukSupplierById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call deleteProdukSupplier(?) ;",[id]);
        res.status(201).json({ message: 'produk supplier berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus produk supplier', error: error.message });
    }
    
};

export {
    getAllProdukSupplier,
    createProdukSupplier,
    getProdukSupplierById,
    deleteProdukSupplierById,
    updateProdukSupplier
};
