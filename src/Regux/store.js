import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";




let store = {
    _State : {
        DialogsPage: {
            Dialogs: [
                {name: "Grisha", id: 1},
                {name: "Nastena", id: 2},
                {name: "Dima", id: 3},
                {name: "Pasha", id: 4}
            ],
            Messeges: [
                {id: 1, name: "hi"},
                {id: 2, name: "Hello"},
                {id: 3, name: "Yes"},
                {id: 4, name: "hm..."}

            ],
            newMessegeBody: "jj"
        },
        ProFilePage: {
            Posts: [
                {id: 1, messege: "Hello"},
                {id: 2, messege: "hi"},
                {id: 3, messege: "hm..."}
            ],
            newPostText: ""
        }

    },
    _callSubscriber ()  {
        console.log('state');
    },

    getState(){
        return this._State;
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){

        this._State.ProFilePage= profileReduser(this._State.ProFilePage, action);
        this._State.DialogsPage= dialogsReduser(this._State.DialogsPage, action);

        this._callSubscriber(this._State);


    }

}










export default store ;
window.store =store;