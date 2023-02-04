import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
    dataInput: string,
    repositoriesData: Array<any>,
    usersData: Array<any>,
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        dataInput: "",
        repositoriesData: [],
        usersData: [],
    },

    mutations: {
        setDataInput (state, dataInput: string) {
            state.dataInput = dataInput
        },

        clearInput (state, dataInput: string) {
            state.dataInput = dataInput
        },

        setUsersData(state, usersData: Array<any>){
            state.usersData = usersData
        },

        setRepositoriesData(state, repositoriesData: Array<any>){
            state.repositoriesData = repositoriesData
        }
    }
})