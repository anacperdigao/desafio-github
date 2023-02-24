import IUsersData from "@/interfaces/IUsersData";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
    dataInput: string,
    usersData: Array<IUsersData>,
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        dataInput: "",
        usersData: [],
    },

    mutations: {
        setDataInput (state, dataInput: string) {
            state.dataInput = dataInput
        },

        clearInput (state, dataInput: string) {
            state.dataInput = dataInput
        },

        setUsersData(state, usersData: Array<IUsersData>){
            state.usersData = usersData
        },
    }
})