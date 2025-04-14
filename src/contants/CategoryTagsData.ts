import desserts from '~/assets/icons/aside/desserts.svg';
import first from '~/assets/icons/aside/first.svg';
import grill from '~/assets/icons/aside/grill.svg';
import kids from '~/assets/icons/aside/kids.svg';
import mains from '~/assets/icons/aside/mains.svg';
import national from '~/assets/icons/aside/national.svg';
import salads from '~/assets/icons/aside/salads.svg';
import vegan from '~/assets/icons/aside/vegan.svg';

export interface CategoryTagInfo {
    id: string;
    label: string;
    icon: string;
    colorScheme: string;
}

export const categoryTags: Record<string, CategoryTagInfo> = {
    mains: {
        id: 'mains',
        label: 'Вторые блюда',
        icon: mains,
        colorScheme: 'yellow',
    },
    national: {
        id: 'national',
        label: 'Национальные',
        icon: national,
        colorScheme: 'orange',
    },
    kids: {
        id: 'kids',
        label: 'Детские',
        icon: kids,
        colorScheme: 'pink',
    },
    grill: {
        id: 'grill',
        label: 'Гриль',
        icon: grill,
        colorScheme: 'red',
    },
    first: {
        id: 'first',
        label: 'Первые блюда',
        icon: first,
        colorScheme: 'red',
    },
    vegan: {
        id: 'vegan',
        label: 'Веганские блюда',
        icon: vegan,
        colorScheme: 'red',
    },
    desserts: {
        id: 'desserts',
        label: 'Веганские блюда',
        icon: desserts,
        colorScheme: 'red',
    },
    salads: {
        id: 'salads',
        label: 'Веганские блюда',
        icon: salads,
        colorScheme: 'red',
    },
};
