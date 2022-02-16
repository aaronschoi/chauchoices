type TRating = 1 | 2 | 3 | 4 | 5

export interface IPost {
    postID : number,
    title : string,
    headline : string,
    description : string,
    address : string,
    ratings : {
        tables : TRating,
        chairs : TRating,
        lighting : TRating,
        sound : TRating,
        smell : number,
        outlets : TRating,
        bathroom : TRating
    },
    outlets : {
        quantity : number 
    },
    food : {
        availability : string
    },
    tables : {
        size : {
            height : number,
            width : number,
            shape : string
        },
        quality : string,
        quantity : number
    },
    chairs : {
        size : {
            height : number,
            width : number
        },
        quality : string,
        quanity : number
    },
    ambience : {
        quality : string
    },
    cost : {
        quality : string
    }
}

export type TPosts = [IPost]