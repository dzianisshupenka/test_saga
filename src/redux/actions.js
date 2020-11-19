export const LOAD_DATA = "LOAD_DATA";
export const PUT_DATA = "PUT_DATA";

export const putData = (data) => {
    return {
        type: PUT_DATA,
        data: data
    }
};

export const loadData = () => {
    return {
        type: LOAD_DATA
    }
};
