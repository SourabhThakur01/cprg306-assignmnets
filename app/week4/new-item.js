"use client";

import { useState } from "react";

export default function NewItem() {
    const [name,setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


const handleSubmit = (event) => {
    event.preventDefault();
    
    const item ={
        name,
        quantity,
        category
    }
    console.log(item);

    alert("Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);
    setName("");
    setQuantity(1);
    setCategory("produce");
}
}
