import alex from '../assets/bloggers/alex.png';
import bake from '../assets/bloggers/bake.png';
import elena from '../assets/bloggers/elena.png';

export interface Blogger {
    name: string;
    username: string;
    avatar: string;
    quote: string;
}

export const bloggerAvatars = {
    elena,
    alex,
    bake,
};

export const bloggers: Blogger[] = [
    {
        name: 'Елена Высоцкая',
        username: '@elenavysot',
        avatar: bloggerAvatars.elena,
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Alex Cook',
        username: '@fantasticcooking',
        avatar: bloggerAvatars.alex,
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Екатерина Константинопольская',
        username: '@bake_and_pie',
        avatar: bloggerAvatars.bake,
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
