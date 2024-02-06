import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap/Table";

function Catatan() {
    const [makanan, setMakanan] = useState([]); // berfungsi untuk menyimpan makanan

    const getAll = () =>  {
        axios  // axios berfungsi untuk request data melalui http  
        .get('http://localhost:3031/products') // mengambil data dari limk terseburt 
        .then((res) => {
            setMakanan(res.data);
        })
        .catch((error) => {
            alert("terjadi kesalahan" = error);
        });
    };

    const deleteUser = async (id) => {
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
        </>
    )
}

export default Catatan;