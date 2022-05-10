export const Data = {
    menus: [{
            header: true,
            name: 'Dashboard'
        },
        {
            dropdown: false,
            // active: true,
            name: 'Dashboard',
            icon: 'fas fa-fire-flame-curved',
            url: '/',
        },
        {
            header: true,
            name: 'Pesan',
            url: '/',
        },
        {
            dropdown: true,

            name: 'Pesan',
            icon: 'fas fa-comment',
            children: [{
                    name: 'Menfess',
                    url: '/layout/default',
                }, {
                    name: 'Kritik & Saran',
                    url: '/layout/transparent-sidebar'

                }, {

                    name: 'Pelajaran Atau Materi',
                    url: '/layout/top-navigation'
                }

            ]
        },
        {
            dropdown: true,
            active: false,
            name: 'Auth',
            icon: 'far fa-user',
            children: [
                {
                    name: 'Login',
                    url: '/auth/login',
                    active: false
                },
            ]
        },
    ]
};