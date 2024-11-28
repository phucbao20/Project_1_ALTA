import { ref, get, child, set, update, remove } from "firebase/database"
import { db } from "../../config/firebase.config"
import { IFlim } from "../../type/flim";
import { v4 as uuidv4 } from 'uuid';
const useRef = ref(db, "flims");
export const FlimService = {
    getAll: async () => {
        const response = await get(useRef).then(snapshot => snapshot.val());
        return Object.values(response)
    },
    getById : async (id : string) =>{
        return await get(child(useRef, `/${id}`)).then(snapshot => snapshot.val());
    },
    createFlim : async (data : IFlim) => {
     let _id = uuidv4();    
     return await set(child(useRef, `/${_id}`), {...data,_id}) //truyeen data tu front end qua
        .then(() => data)
        .catch(() => {});
    },
    updateFlim : async (data : IFlim) => {
        return await update(child(useRef, `/${data._id}`), data)
        .then(() => data)
        .catch(() => {});
    },
    deleteFlim : async (_id : string) => {
        return await remove(child(useRef, `/${_id}`))
        .then(() => true)
        .catch(() => {});
    }
}