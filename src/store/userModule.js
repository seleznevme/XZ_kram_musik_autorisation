export const userModule = {
    state: () => ({
        user_list: [],
        user: {
            id: '',
            name: '',
            gender: '',
            music_ganre: 'Не определился',
            mail: '',
            login: '',
            pass: '',
            check_pass: '',
            about: '',
        }
    }),
    mutations: {
        user_name(state, name) {
            state.user.name = name;
        },
        user_gender(state, gender) {
            state.user.gender = gender;
        },
        user_music_ganre(state, music_ganre) {
            state.user.music_ganre = music_ganre;
        },
        user_mail(state, mail) {
            state.user.mail = mail;
        },
        user_login(state, login) {
            state.user.login = login;
        },
        user_pass(state, pass) {
            state.user.pass = pass;
        },
        user_check_pass(state, check_pass) {
            state.user.check_pass = check_pass;
        },
        user_about(state, about) {
            state.user.about = about;
        },
        add_user(state) {
            state.user.id = Date.now()
            state.user_list.push(Object.assign({}, state.user));
            console.log(state.user_list)
            state.user.name = ''
            state.user.gender = ''
            state.user.music_ganre = 'Не определился'
            state.user.mail = ''
            state.user.login = ''
            state.user.pass = ''
            state.user.check_pass = ''
            state.user.about = ''
        }
    },
    
}