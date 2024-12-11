"use client";

import Button from "antd/es/button";
import { Housings } from "../components/Housings";
import { useEffect, useState } from "react";
import { createHousing, deleteHousing, getAllHousings, HousingRequest, updateHousing } from "../services/housings";
import { CreateUpdateHousing, Mode } from "../components/CreateUpdateHousing";
import Title from "antd/es/typography/Title";
import '../globals.css'; 

export default function HousingsPage(){
    const defaultValues = {
        title: "",
        description: "",
        price: 1,
    } as Housing;

    const [values, setValues] = useState<Housing>(defaultValues);

    const [housings, setHousings] = useState<Housing[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create)

    useEffect(() => {
        const getHousings = async() => {
            const housings = await getAllHousings();
            setLoading(false);
            setHousings(housings);
        };
        getHousings();
    }, []);

    const handleCreateHousing = async (request: HousingRequest) => {
        await createHousing(request);
        closeModal();

        const housings = await getAllHousings();
        setHousings(housings);
    };

    const handleUpdateHousing = async (id: string, request: HousingRequest) => {
        await updateHousing(id, request);
        closeModal();

        const housings = await getAllHousings();
        setHousings(housings); 
    };

    const handleDeleteHousing = async (id: string) => {
        await deleteHousing(id);
        closeModal();
        
        const housings = await getAllHousings();
        setHousings(housings);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (housing: Housing) => {
        setMode(Mode.Edit);
        setValues(housing);
        setIsModalOpen(true);
    };

    return(
        <div>
            <Button className="addHousingButton" onClick={openModal}>
                Добавить жилье
            </Button>
            <CreateUpdateHousing 
                mode={mode} 
                values={values} 
                isModalOpen={isModalOpen} 
                handleCreate={handleCreateHousing} 
                handleUpdate={handleUpdateHousing} 
                handleCancel={closeModal}
            />
            {loading ? (<Title>Loading...</Title>) : (
                <Housings 
                housings={housings} 
                handleOpen={openEditModal} 
                handleDelete={handleDeleteHousing}/>)}
        </div>
    );
} 