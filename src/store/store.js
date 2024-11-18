import { create } from "zustand";
import axios from "axios";

const User = (set, get) => ({
    allUsers: [],
    loader: false,
    addUser: (payload) => {
        set((state) => ({
            allUsers: [...state.allUsers, { ...payload }],
        }));
    },
    deleteUser: (body) => {
        const temp = get()?.allUsers?.filter((item) => item?.id !== body?.id)
        set((state) => ({
            allUsers: temp,
        }));
        // get().getAllUsers()
    },
    getAllUsers: async () => {
        set({ ...get(), loader: true });
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log('res', res)
            set({ ...get(), loader: false, allUsers: res.data });
        } catch (err) {
            console.error("Error in data fetch:", err);
            // set({ ...initialState, error: true, errorData: err.message });
        }
    },
});


const useUser = create(User);


export default useUser;