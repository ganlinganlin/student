


export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/person',
                name: 'person',
                label: '个人',
                icon: 'user-solid',
                url: 'analysis/person'
            }
        ]

    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            console.log(val,'val')
            if(val.name !=='person') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        closeTag(state, item) {
            console.log(item,'item')
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        }
    }
}