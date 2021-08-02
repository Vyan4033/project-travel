//@ts-check

import { db } from "../../lib/db";

const handler = async(req, res) => {
    const {id, nama, harga, foto} = req.body
    try{
        if(!id || !nama || !harga || !foto){
            return res
            .status(400)
            .json({message : "Input harus diisi semua"})
        }

        const results = await db.query(
            `INSERT INTO paket (id, nama, harga, foto) 
            VALUES (?,?,?,?)`,
            [id, nama, harga, foto]
        )
        await db.end;
        
        return res.json(results)
    }
    catch (e) {
        res.status(500).json({message : e.message});
    }
}

export default handler