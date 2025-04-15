import first from '~/assets/icons/aside/first.svg';
import kids from '~/assets/icons/aside/kids.svg';
import mains from '~/assets/icons/aside/mains.svg';
import national from '~/assets/icons/aside/national.svg';
import vegan from '~/assets/icons/aside/vegan.svg';
export type RecipeCard = {
    id: string;
    title: string;
    description: string;
    tag: string;
    views: number;
    likes: number;
};

export type RecipeListItem = {
    id: string;
    title: string;
    icon?: string;
};

export type Section = {
    id: string;
    title: string;
    description: string;
    cards: RecipeCard[]; // то, что отображается в карточках слева
    list: RecipeListItem[]; // то, что отображается списком справа
};

export const sectionsData: Section[] = [
    {
        id: 'vegan',
        title: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.',
        cards: [
            {
                id: '1',
                title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                description:
                    'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                tag: 'mains',
                views: 1,
                likes: 1,
            },
            {
                id: '2',
                title: 'Капустные котлеты',
                description:
                    'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                tag: 'mains',
                views: 2,
                likes: 1,
            },
        ],
        list: [
            { id: '3', title: 'Стейк для вегетарианцев', icon: mains },
            { id: '4', title: 'Котлеты из гречки и фасоли', icon: mains },
            { id: '5', title: 'Сырный суп с лапшой и брокколи', icon: first },
        ],
    },
    {
        id: 'desserts',
        title: 'Десерты, выпечка',
        description:
            'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенье, блины, пончики, вареники, и, конечно, хлеб – рецепты изделий из теста многообразны и невероятно популярны.',
        cards: [
            {
                id: '6',
                title: 'Бананово-молочное желе',
                description:
                    'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
                tag: 'Детское блюдо',
                views: 61,
                likes: 1,
            },
            {
                id: '7',
                title: 'Нежный сливочно-сырный крем для кексов',
                description:
                    'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
                tag: 'Детское блюдо',
                views: 68,
                likes: 1,
            },
        ],
        list: [
            { id: '8', title: 'Домашние сырные палочки', icon: kids },
            { id: '9', title: 'Панкейки', icon: national },
            { id: '10', title: 'Воздушное банановое печенье на сковороде', icon: vegan },
        ],
    },
];
