export const postModule = {
    state: () => ({
        post_list: [
            {   id: 1,
                title: 'Новая модная метал-группа с женским вокалом: VENOM PRISON',
                body: 'Ну то есть как новая… VENOM PRISON собрались в Уэльсе в 2014-м году и на сегодняшний день выпустили три альбома, Animus (2016), Samsara (2019) и Primeval (2020). Британская сцена и рок-пресса заприметили коллектив еще на этапе Samsara: свежий, яростный, техничный, накачанный брейкдаунами материал на границе «правильного» дэз-метала (местами с примесью дэзграйнда) и актуального бесноватого дэзкора с еще более бесноватой, однако дико харизматичной барышней на вокале (фронтвумен, к слову, — русская женщина Лариса Ступар, переехавшая в Южный Уэльс незадолго до создания банды) получил высокие оценки, а VENOM PRISON — статус одной из наиболее многообещающих экстрим-команд последних десяти лет.',
                image: require('@/views/news/img/news/news1.jpg'),
                like: 15,
                dislike: 5,
                add_like: false,
                add_dislike: false,
            },
            {   id: 2,
                title: 'В турах METALLICA и TOOL заболевших ковидом будут искать с помощью натренированных собак',
                body: 'Новинка в мире большого шоубиза: помимо масок, строгих ограничений круга общения и минимизации взаимодействий представители Большого Шоубиза, которые хотят собирать стадионы, но при этом максимально обезопасить себя и туровую команду от злосчастной ковидлы (дело не только в личных рисках, но и огромных потерях от отмены мероприятий подобного уровня), начинают использовать специально натренированных собак. В основном это немецкие овчарки, бельгийские овчарки малинуа и лабрадоры-ретриверы — которые, обнюхав людей, способны определить зараженных вирусом.',
                image: require('@/views/news/img/news/news2.jpg'),
                like: 25,
                dislike: 10,
                add_like: false,
                add_dislike: false,
            },
            {   id: 3,
                title: 'Jeff Waters уходит с вокального поста ANNIHILATOR',
                body: 'Отец-основатель ANNIHILATOR Jeff Waters объявил, что более не желает выступать в роли вокалиста — и в будущем сосредоточится на гитарах. Так, работать за микрофоном будет Stu Block — фронтмен INTO ETERNITY и в прошлом ICED EARTH. Стю также спел на выходящем в феврале альбоме Metal II… ну то есть как альбоме… по сути, ремейке диска 2007 года Metal, первом в серии из 18 переизданий, которые зачем-то наметили канадцы на ближайшие годы.',
                image: require('@/views/news/img/news/news3.jpg'),
                like: 35,
                dislike: 15,
                add_like: false,
                add_dislike: false,
            },            
        ],
        post: {
            id: '',
            title: '',
            body: '',
            image: require('@/views/news/img/news/news1.jpg'),
            like: 0,
            dislike: 0,
            add_rating: false,      
        },        
        copy_post_edit: '',        
    }),
    mutations: {
        post_title(state, title) {
            state.post.title = title;
        },
        post_body(state, body) {
            state.post.body = body;
        },
        add_post(state) {
            state.post.id = Date.now();
            state.post_list.push(Object.assign({}, state.post));            
            state.post.title = '';
            state.post.body = '';          
        },
        dellete_post(state, id) {
            const index = state.post_list.findIndex(n => n.id == id);
            state.post_list.splice(index, 1);
        },        
        copy_post_edit (state, id) {
            state.copy_post_edit = '';
            const index = state.post_list.findIndex(n => n.id == id);
            state.copy_post_edit = state.post_list[index];            
        },
        post_edit_title(state, title) {
            state.copy_post_edit.title = title;
        },
        post_edit_body(state, body) {
            state.copy_post_edit.body = body;
        },
        add_post_edit(state){
            const index = state.post_list.findIndex(n => n.id == state.copy_post_edit.id);
            state.post_list.splice(index, 1, state.copy_post_edit);
        },
        add_post_like(state, id){
            const index = state.post_list.findIndex(n => n.id == id);
            if (state.post_list[index].add_like == false && state.post_list[index].add_dislike == false) {                
                state.post_list[index].like += 1;
                state.post_list[index].add_like = true;
            } else if (state.post_list[index].add_like == true) {                              
                state.post_list[index].like -= 1;
                state.post_list[index].add_like = false;
            } else if (state.post_list[index].add_dislike == true) {
                state.post_list[index].like += 1;
                state.post_list[index].add_like = true;
                state.post_list[index].dislike -= 1;
                state.post_list[index].add_dislike = false;
            }
        },
        add_post_dislike(state, id){
            const index = state.post_list.findIndex(n => n.id == id);
            if (state.post_list[index].add_dislike == false && state.post_list[index].add_like == false) {                
                state.post_list[index].dislike += 1;
                state.post_list[index].add_dislike = true;
            } else if (state.post_list[index].add_dislike == true) {
                state.post_list[index].dislike -= 1;
                state.post_list[index].add_dislike = false;
            } else if (state.post_list[index].add_like == true) {
                state.post_list[index].dislike += 1;
                state.post_list[index].add_dislike = true;
                state.post_list[index].like -= 1;
                state.post_list[index].add_like = false;
            }
        }
    },
    
}