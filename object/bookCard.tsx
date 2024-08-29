import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

export default function GetCard() {
    const { id } = useParams();
    const [card, setCard] = useState(null);
}