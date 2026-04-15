import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    navbarIcon: false,
    sidebarOpen: false,
    showSideBarPge: "Home"
}


const sideBarNavigation = createSlice({
    name: "SideBarSetUp",
    initialState: initialState,

    reducers: {
        toggleNavBarIcon: (state) => {
            state.navbarIcon = !state.navbarIcon
        },

        toggleSideBar: (state) => {
            state.sidebarOpen = !state.sidebarOpen
        },

        setShowSideBarPge: (state, action) => {
            state.showSideBarPge = action.payload;  
        },

    }
})

export const { toggleNavBarIcon, toggleSideBar  , setShowSideBarPge} = sideBarNavigation.actions

export default sideBarNavigation.reducer