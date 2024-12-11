import { Modal } from "antd";
import { HousingRequest } from "../services/housings";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props{
    mode: Mode;
    values: Housing;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: HousingRequest) => void;
    handleUpdate: (id: string, request: HousingRequest) => void;
}

export enum Mode{
    Create,
    Edit
}

export const CreateUpdateHousing = ({mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate
} :Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(1);

    useEffect(() => {
        setTitle(values.title);
        setDescription(values.description);
        setPrice(values.price);
    }, [values]);

    const handleOnOk = async () => {
        const housingRequest = {title, description, price};

        if (mode === Mode.Create) {
            handleCreate(housingRequest);
          } else {
            handleUpdate(values.id, housingRequest);
          }
    };

    return(
        <Modal 
            title={mode === Mode.Create ? "Добавить новую запись о жилье" : "Редактировать запись"} 
            open={isModalOpen} 
            cancelText={"Отмена"}
            onOk={handleOnOk}
            onCancel={handleCancel}
        >
            <div className="housing_modal">
                <Input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Заголовок">
                </Input>

                <TextArea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Описание">
                </TextArea>

                <Input 
                    value={price} 
                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} 
                    placeholder="Стоимость">
                </Input>
            </div>        
        </Modal>
    )
};