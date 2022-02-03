import { createStore } from "vuex";
import { userModule } from "@/store/userModule.js"
import { postModule } from "@/store/postModule.js"

export default createStore({
    modules: {
        users: userModule,
        posts: postModule
    }
})