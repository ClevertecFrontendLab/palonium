// src/config/categoryConfig.ts
export type Category = {
    slug: string;
    label: string;
};

export const categories: Category[] = [
    { slug: 'snacks', label: 'Закуски' },
    { slug: 'first-courses', label: 'Первые блюда' },
    { slug: 'main-courses', label: 'Вторые блюда' },
    { slug: 'sides', label: 'Гарниры' },
    { slug: 'desserts', label: 'Десерты' },
    { slug: 'bakery', label: 'Выпечка' },
    { slug: 'raw', label: 'Сыроедческие блюда' },
    { slug: 'drinks', label: 'Напитки' },
];

// Быстрый доступ:
export const slugToLabel = Object.fromEntries(categories.map((c) => [c.slug, c.label]));
export const labelToSlug = Object.fromEntries(categories.map((c) => [c.label, c.slug]));
