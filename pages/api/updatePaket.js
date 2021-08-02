//@ts-check

import { db } from "../../lib/db"

const handler = async (req, res) => {
    const {id, nama, harga, foto} = req.body
    try{
        if(!id || !nama || !harga || !foto){
            return res
            .status(400)
            .json({message : 'Isian tidak boleh kosong'})
        }
        const results = await db.query(
            `UPDATE paket set id = ?, nama = ?, harga = ?, foto = ? WHERE id = ?`,
            [id, nama, harga, foto, id]
        )
        
        return res.json(results)
    } 
    catch (e) {
        res.status(500).json({messaage : e.message})
    }
}

export default handler;