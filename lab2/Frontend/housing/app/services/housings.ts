export interface HousingRequest{
    title: string;
    description: string;
    price: number;
}

export const getAllHousings = async () => {
    const response = await fetch("http://localhost:5192/api/Housings");

    return response.json();
};

export const createHousing = async (housingRequest: HousingRequest) => {
    await fetch('http://localhost:5192/api/Housings', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(housingRequest),
    });
};

export const updateHousing = async (id: string, housingRequest: HousingRequest) => {
    await fetch(`http://localhost:5192/api/Housings/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(housingRequest),
    });
}

export const deleteHousing = async (id: string) => {
    await fetch(`http://localhost:5192/api/Housings/${id}`, {  
        method: "DELETE",
    });
}
