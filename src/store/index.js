import { reactive } from "vue";
export const store = reactive({
    menuWrapped: false,
    chosenMonth: 'январь',
    cartTotal: 8,
    notifications: 2,
});

export const getters = {
    menuWrapp(){
        return store.menuWrapped;
    },
    getChosenMonth(){
        return store.chosenMonth;
    },
    getCartTotal(){
        return store.cartTotal;
    },
    getNotifications(){
        return store.notifications
    }
    
}

export const mutations = {
    togglemenuWrapped(){
        store.menuWrapped = !store.menuWrapped
    },
    updateChosenMonth(month){
        store.chosenMonth = month
    }
};
