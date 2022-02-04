import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
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
        },
        user_in: {
            mail: '',
            pass: ''
        },
        sign_in: false
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
        user_mail_in(state, mail) {
            state.user_in.mail = mail;
        },
        user_pass_in(state, pass) {
            state.user_in.pass = pass;
        },
        add_user(state) {
            state.user_list.push(Object.assign({}, state.user));
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, state.user.mail, state.user.pass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ..
                });
            state.user.name = ''
            state.user.gender = ''
            state.user.music_ganre = 'Не определился'
            state.user.mail = ''
            state.user.login = ''
            state.user.pass = ''
            state.user.check_pass = ''
            state.user.about = ''
        },
        in_user(state) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, state.user_in.mail, state.user_in.pass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    state.sign_in = true;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ..
                });
            state.user_in.mail = ''
            state.user_in.pass = ''
        }
    },

}