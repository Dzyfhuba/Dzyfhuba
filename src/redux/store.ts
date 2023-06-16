import { Action, action, createStore } from "easy-peasy";

export interface StoreModel {
  sidebarShow: boolean
  setSidebarShow: Action<StoreModel, boolean>
}

const store = createStore<StoreModel>({
  sidebarShow: false,
  setSidebarShow: action((state, payload) => {
    state.sidebarShow = payload
  })
});

export default store