import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { slugToLabel } from '~/config/categoryConfig';

// Статичные подписи
const basePathNameMap: Record<string, string> = {
    juicy: 'Самое сочное',
    vegan: 'Веганская кухня',
    'main-courses': 'Вторые блюда',
};

const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Если путь строго "/vegan", добавим вручную "main-courses"
    const fullPathnames =
        location.pathname === '/vegan' ? [...pathnames, 'main-courses'] : pathnames;

    return (
        <Breadcrumb fontSize='sm' separator='›'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' color='blackAlpha.700'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {fullPathnames.map((name, index) => {
                const routeTo = '/' + fullPathnames.slice(0, index + 1).join('/');
                const isLast = index === fullPathnames.length - 1;

                const label =
                    basePathNameMap[name.toLowerCase()] ||
                    slugToLabel[name.toLowerCase()] ||
                    decodeURIComponent(name);

                return (
                    <BreadcrumbItem key={routeTo} isCurrentPage={isLast}>
                        {isLast ? (
                            <BreadcrumbLink
                                color='black'
                                cursor='default'
                                _hover={{ textDecor: 'none' }}
                            >
                                {label}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink as={Link} to={routeTo} color='gray.600'>
                                {label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default BreadCrumbs;
