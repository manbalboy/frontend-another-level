interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: String;
}

const k:IKorean = {
    name: "이웅재",
    city: "서울"
}

