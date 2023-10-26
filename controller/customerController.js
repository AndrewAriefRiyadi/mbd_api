import pool from "../db.js"

const getAllCustomer = async (req,res) => {
    const result = await pool.query("call getAllCustomer();")
    res.send(await result[0][0])
};

const getCustomerById = async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query("call getCustomerById(?);",[id])
        res.send(await result[0][0])
    } catch (error){
        res.status(500).json({ message: 'Tidak ada customer sesuai id', error: error.message });
    }
    
    
};

const createCustomer = async (req, res) => {
    const { name, age, contact, email } = req.body;
    console.log(req.body)
    try {
        const result = await pool.query("call CreateCustomer(?,?,?,?)", [name, age, contact, email]);
        res.status(201).json({ message: 'Pelanggan berhasil dibuat' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat pelanggan', error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id, name, age, contact, email } = req.body;
        const result = await pool.query('call UpdateCustomer(?,?,?,?,?)',[id,name,age,contact,email]);
        res.status(200).json({ message: 'Data pelanggan berhasil diperbarui' });
    } catch (error) {
        console.error("Kesalahan saat memperbarui pelanggan:", error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui pelanggan', error: error.message });
    }
};

const deleteCustomerById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("call DeleteCustomer(?) ;",[id]);
        res.status(201).json({ message: 'Pelanggan berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pelanggan', error: error.message });
    }
    
};

export {
    getAllCustomer,
    createCustomer,
    getCustomerById,
    deleteCustomerById,
    updateCustomer
};
