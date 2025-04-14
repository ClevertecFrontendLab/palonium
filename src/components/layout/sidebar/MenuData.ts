export interface SubMenuItem {
    label: string;
    href: string;
}

export interface MenuSection {
    label: string;
    icon: string; // путь до иконки
    items: SubMenuItem[];
    dataTestId?: string;
}

export const menuData: MenuSection[] = [
    {
        label: 'Салаты',
        icon: new URL('../../../assets/icons/aside/salads.svg', import.meta.url).href,
        items: [
            { label: 'Мясные салаты', href: '/salads/meat' },
            { label: 'Рыбные салаты', href: '/salads/fish' },
            { label: 'Овощные салаты', href: '/salads/vegetable' },
            { label: 'Тёплые салаты', href: '/salads/warm' },
        ],
        dataTestId: '',
    },
    {
        label: 'Закуски',
        icon: new URL('../../../assets/icons/aside/snaks.svg', import.meta.url).href,
        items: [
            { label: 'Мясные закуски', href: '/snacks/meat' },
            { label: 'Рыбные закуски', href: '/snacks/fish' },
            { label: 'Овощные закуски', href: '/snacks/vegetable' },
            { label: 'Тёплые закуски', href: '/snacks/warm' },
            { label: 'Бутерброды', href: '/snacks/sandwiches' },
            { label: 'Фастфуд', href: '/snacks/pates' },
        ],
        dataTestId: '',
    },
    {
        label: 'Первые блюда',
        icon: new URL('../../../assets/icons/aside/first.svg', import.meta.url).href,
        items: [
            { label: 'Мясные супы', href: '/first/meat' },
            { label: 'Овощные супы', href: '/first/vegetable' },
            { label: 'Бульоны', href: '/first/broths' },
            { label: 'Холодные супы', href: '/first/cold' },
            { label: 'Диетические супы', href: '/first/diet' },
        ],
        dataTestId: '',
    },
    {
        label: 'Вторые блюда',
        icon: new URL('../../../assets/icons/aside/mains.svg', import.meta.url).href,
        items: [
            { label: 'Мясные', href: '/second/meat' },
            { label: 'Рыбные', href: '/second/fish' },
            { label: 'Овощные', href: '/second/vegetable' },
            { label: 'Из птицы', href: '/second/poultry' },
            { label: 'Из грибов', href: '/second/poultry' },
            { label: 'Из субпродуктов', href: '/second/offal' },
            { label: 'На пару', href: '/second/steam' },
            { label: 'Пельмени вареники', href: '/second/steam' },
            { label: 'Мучные гарниры', href: '/second/flour-side' },
            { label: 'Овощные гарниры', href: '/second/vegetable-side' },
            { label: 'Пицца', href: '/second/pizza' },
            { label: 'Суши', href: '/second/sushi' },
        ],
        dataTestId: '',
    },
    {
        label: 'Десерты, выпечка',
        icon: new URL('../../../assets/icons/aside/desserts.svg', import.meta.url).href,
        items: [
            { label: 'Блины и оладьи', href: '/desserts/sweets' },
            { label: 'Пироги и пончики', href: '/desserts/cookies' },
            { label: 'Торты', href: '/desserts/cakes' },
            { label: 'Рулеты', href: '/desserts/rolls' },
            { label: 'Кексы и маффины', href: '/desserts/muffins' },
            { label: 'Сырники и ватрушки', href: '/desserts/cheese-bake' },
            { label: 'Из слоёного теста', href: '/desserts/puff' },
            { label: 'Из заварного теста', href: '/desserts/choux' },
            { label: 'Из дрожжевого теста', href: '/desserts/yeast' },
            { label: 'Булочки и сдоба', href: '/desserts/buns' },
            { label: 'Хлеб', href: '/desserts/bread' },
            { label: 'Тесто на пиццу', href: '/desserts/dough' },
            { label: 'Кремы', href: '/desserts/creams' },
        ],
        dataTestId: '',
    },
    {
        label: 'Блюда на гриле',
        icon: new URL('../../../assets/icons/aside/grill.svg', import.meta.url).href,
        items: [
            { label: 'Говядина', href: '/grill/beef' },
            { label: 'Свинина', href: '/grill/pork' },
            { label: 'Птица', href: '/grill/pizza' },
            { label: 'Рыба', href: '/grill/fish' },
            { label: 'Грибы', href: '/grill/mushrooms' },
            { label: 'Овощи', href: '/grill/vegetables' },
        ],
        dataTestId: '',
    },
    {
        label: 'Веганская кухня',
        icon: new URL('../../../assets/icons/aside/vegan.svg', import.meta.url).href,
        items: [
            { label: 'Закуски', href: '/vegan/snacks' },
            { label: 'Первые блюда', href: '/vegan/first' },
            { label: 'Вторые блюда', href: '/vegan/main-courses' },
            { label: 'Гарниры', href: '/vegan/sides' },
            { label: 'Десерты', href: '/vegan/desserts' },
            { label: 'Выпечка', href: '/vegan/baking' },
            { label: 'Сыроедческие блюда', href: '/vegan/mediterranean' },
            { label: 'Напитки', href: '/vegan/drinks' },
        ],
        dataTestId: 'vegan-cuisine',
    },
    {
        label: 'Детские блюда',
        icon: new URL('../../../assets/icons/aside/kids.svg', import.meta.url).href,
        items: [
            { label: 'Первые блюда', href: '/kids/first' },
            { label: 'Вторые блюда', href: '/kids/second' },
            { label: 'Гарниры', href: '/kids/sides' },
            { label: 'Выпечка', href: '/kids/baking' },
            { label: 'Без глютена', href: '/kids/gluten-free' },
            { label: 'Без сахара', href: '/kids/sugar-free' },
            { label: 'Без аллергенов', href: '/kids/allergen-free' },
            { label: 'Блюда для прикорма', href: '/kids/allergy-safe' },
        ],
        dataTestId: '',
    },
    {
        label: 'Лечебное питание',
        icon: new URL('../../../assets/icons/aside/medical.svg', import.meta.url).href,
        items: [
            { label: 'Детская диета', href: '/diet/child' },
            ...[...Array(14)].map((_, i) => ({
                label: `Диета №${i + 1}`,
                href: `/diet/${i + 1}`,
            })),
            { label: 'Без глютена', href: '/diet/gluten-free' },
            { label: 'Без аллергенов', href: '/diet/allergen-free' },
        ],
        dataTestId: '',
    },
    {
        label: 'Национальные',
        icon: new URL('../../../assets/icons/aside/national.svg', import.meta.url).href,
        items: [
            { label: 'Американская кухня', href: '/national/american' },
            { label: 'Армянская кухня', href: '/national/armenian' },
            { label: 'Греческая кухня', href: '/national/greek' },
            { label: 'Грузинская кухня', href: '/national/greek' },
            { label: 'Итальянская кухня', href: '/national/greek' },
            { label: 'Испанская кухня', href: '/national/greek' },
            { label: 'Китайскаяская кухня', href: '/national/greek' },
            { label: 'Мексиканская кухня', href: '/national/greek' },
            { label: 'Паназиатская кухня', href: '/national/greek' },
            { label: 'Русская кухня', href: '/national/russian' },
            { label: 'Турецкая кухня', href: '/national/turkish' },
            { label: 'Французская кухня', href: '/national/french' },
            { label: 'Шведская кухня', href: '/national/swedish' },
            { label: 'Японская кухня', href: '/national/japanese' },
            { label: 'Другая кухня', href: '/national/asian' },
        ],
        dataTestId: '',
    },
    {
        label: 'Соусы',
        icon: new URL('../../../assets/icons/aside/sauce.svg', import.meta.url).href,
        items: [
            { label: 'Соусы мясные', href: '/sauces/meat' },
            { label: 'Соусы к рыбе', href: '/sauces/fish' },
            { label: 'Маринады', href: '/sauces/muffins' },
        ],
        dataTestId: '',
    },
    {
        label: 'Напитки',
        icon: new URL('../../../assets/icons/aside/drinks.svg', import.meta.url).href,
        items: [
            { label: 'Соки и фреши', href: '/drinks/juice' },
            { label: 'Смузи', href: '/drinks/smoothie' },
            { label: 'Компоты', href: '/drinks/compote' },
            { label: 'Кисели', href: '/drinks/kvass' },
            { label: 'Кофе', href: '/drinks/coffee' },
            { label: 'Лечебный чай', href: '/drinks/tea' },
            { label: 'Квас', href: '/drinks/coffee' },
            { label: 'Коктейли', href: '/drinks/cocktails' },
            { label: 'Алкогольные', href: '/drinks/alcohol' },
        ],
        dataTestId: '',
    },
    {
        label: 'Заготовки',
        icon: new URL('../../../assets/icons/aside/preserves.svg', import.meta.url).href,
        items: [
            { label: 'Мясные заготовки', href: '/preserves/meat' },
            { label: 'Рыбные заготовки', href: '/preserves/fish' },
            { label: 'Из огурцов', href: '/preserves/cucumber' },
            { label: 'Из томатов', href: '/preserves/tomato' },
            { label: 'Из грибов', href: '/preserves/mushroom' },
            { label: 'Овощные заготовки', href: '/preserves/vegetables' },
            { label: 'Салаты, икра', href: '/preserves/salads' },
            { label: 'Из фруктов и ягод', href: '/preserves/fruits' },
        ],
        dataTestId: '',
    },
];
