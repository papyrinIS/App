const SEND_MESSEGE = "SEND_MESSEGE";

let initialstate = {
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

    ]
};


const dialogsReduser = (State = initialstate, action) => {



    switch (action.type) {

        case SEND_MESSEGE: {

            return{
                ...State,
                Messeges:[...State.Messeges, {id : 4, name: action.newMessageBody}]
            }


        }

        default :
            return State;
    }


}

export const sendMessegeCreater = (newMessageBody) => ({type: SEND_MESSEGE, newMessageBody})



export default dialogsReduser;