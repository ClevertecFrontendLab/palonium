import noodles from '~/assets/juicy_recipe/1.png';
import tom from '~/assets/juicy_recipe/2.png';
import ham from '~/assets/juicy_recipe/3.png';
import kneli from '~/assets/juicy_recipe/4.png';
import potatos from '~/assets/juicy_recipe/5.png';
import rolls from '~/assets/juicy_recipe/6.png';
import lasagna from '~/assets/juicy_recipe/7.png';
import meatballs from '~/assets/juicy_recipe/8.png';

export interface JuicyRecipeCardData {
    id: number;
    categoryId: string;
    title: string; // Заголовок (например, "Кнели со спагетти")
    description: string; // Краткое описание
    views: number; // Количество просмотров
    bookmarks: number; // Количество в «Закладках»
    image: string; // Ссылка на изображение
    recommendedBy?: string; // Кто рекомендует (опционально)
}

export const recipesData: JuicyRecipeCardData[] = [
    {
        id: 1,
        categoryId: 'national',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        views: 124,
        bookmarks: 231,
        image: kneli,
    },
    {
        id: 2,
        categoryId: 'kids',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        views: 159,
        bookmarks: 257,
        image: ham,
    },
    {
        id: 3,
        categoryId: 'national',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты ещё остались, но никто их уже не хочет, время варить солянку',
        views: 258,
        bookmarks: 342,
        image: noodles,
    },
    {
        id: 4,
        categoryId: 'grill',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        views: 124,
        bookmarks: 324,
        image: tom,
        // нет поля recommendedBy, так как на скриншоте не указано
    },
    {
        id: 5,
        categoryId: 'mains',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        views: 120,
        bookmarks: 180,
        image: potatos,
    },
    {
        id: 6,
        categoryId: 'national',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        views: 85,
        bookmarks: 180,
        image: rolls,
    },
    {
        id: 7,
        categoryId: 'national',
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        views: 85,
        bookmarks: 152,
        image: lasagna,
    },
    {
        id: 8,
        categoryId: 'national',
        title: 'Тефтели из булгура и чечевицы',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подойдут для постного и вегетарианского меню...',
        views: 85,
        bookmarks: 152,
        image: meatballs,
    },
];
