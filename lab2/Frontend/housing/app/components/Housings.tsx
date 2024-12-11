import Card from "antd/es/card/Card"
import { CardTitle } from "./Card_title"
import Button from "antd/es/button"

interface Props{
    housings: Housing[];
    handleDelete:(id:string) => void;
    handleOpen:(housing: Housing) => void;
}

export const Housings = ({housings, handleDelete, handleOpen}:Props) => {
    return (
        <div className="cards">
            {housings.map((housing : Housing) => (
                <Card 
                    key={housing.id} 
                    className="housing-card"
                    title={<CardTitle title={housing.title} price={housing.price}/>}
                    bordered={false}
                >
                    <strong>Описание:</strong>
                    <p>{housing.description}</p>
                    <div className="card_buttons">
                        <Button 
                            onClick={() => handleOpen(housing)} 
                            style={{flex:1}}
                        >
                            Редактировать
                        </Button>
                        <Button
                            onClick={() => handleDelete(housing.id)}
                            danger 
                            style={{flex:1}}
                        >
                            Удалить
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}