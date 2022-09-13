export interface IPoem {
    id: number,
    poet: string,
    content: string,
    from: string,
    type?: Array<string>,
    dynasty?: string
}

export default <IPoem[]>[
    {
        id: 1,
        poet: "黄增",
        content: "色不迷人人自迷,情人眼里出西施",
        from: '',
        type: ['爱情'],
        dynasty: '清朝'
    },
]