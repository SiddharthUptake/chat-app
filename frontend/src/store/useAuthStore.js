import { create } from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set) => ({
authUser : null,
isSigningUp : false,
isLoggingIng : false,
isUpdatingProfile : false,
isCheckingAuth : true,

signup : async (data) => {
    try {
        const res = await axiosInstance.post('/auth/signup',data);
        set({ authUser: res.data });
    } catch (error) {
        console.log(error,"Error in signup==");
        set({ authUser: null });
    } finally {
        set({ isSigningUp: false });
    }
},

login : async (data) => {
    try {
        const res = await axiosInstance.post('/auth/login',data);
        set({ authUser: res.data });
    } catch (error) {
        console.log(error,"Error in login==");
        set({ authUser: null });
    } finally {
        set({ isLoggingIng: false });
    }
},

updateProfile : async (data) => {
    try {
        const res = await axiosInstance.put('/auth/update',data);
        set({ authUser: res.data });
    } catch (error) {
        console.log(error,"Error in update profile==");
        set({ authUser: null });
    } finally {
        set({ isUpdatingProfile: false });
    }
},

checkAuth : async () => {
    try {
        const res = await axiosInstance.get('/auth/check');
        set({ authUser: res.data });
    } catch (error) {
        console.log(error,"Error in check auth==");
        set({ authUser: null });
    } finally {
        set({ isCheckingAuth: false });
    }
 }
}));