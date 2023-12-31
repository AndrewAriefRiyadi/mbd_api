import pool from "../db.js"

const getAllSupplier = async (req,res) => {
    const result = await pool.query("call getAllSupplier();")
    res.send(await result[0][0])
};

const getSupplierById = async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query("call getSupplierById(?);",[id])
        res.send(await result[0][0])
    } catch (error){
        res.status(500).json({ message: 'Tidak ada Supplier sesuai id', error: error.message });
    }
    
    
};

const createSupplier = async (req, res) => {
    const { name, address, contact, email } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call createSupplier(?,?,?,?)", [name, address, contact, email]);
        res.status(201).json({ message: 'Supplier berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat Supplier', error: error.message });
    }
};

const updateSupplier = async (req, res) => {
    const {id} = req.params;
    try {
        const { name, address, contact, email } = req.body;
        const result = await pool.query('call updateSupplier(?,?,?,?,?)',[id,name,address,contact,email]);
        res.status(200).json({ message: 'Data supplier berhasil diperbarui' });
    } catch (error) {
        console.error("Kesalahan saat memperbarui Supplier:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui Supplier', error: error.message });
    }
};

const deleteSupplierById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call deleteSupplier(?) ;",[id]);
        res.status(201).json({ message: 'Supplier berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus Supplier', error: error.message });
    }
    
};

export {
    getAllSupplier,
    createSupplier,
    getSupplierById,
    deleteSupplierById,
    updateSupplier
};
