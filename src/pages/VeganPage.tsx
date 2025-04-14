import { Box } from '@chakra-ui/react';

import PageIntro from '~/components/sections/pageintro/PageIntro';
import { RecipesVeganMainSection } from '~/components/sections/RecipesSection/RecipesVegaSection';
import { RelevantSection } from '~/components/sections/RelevantSection/RelevantSection';
import HorizontalMenu from '~/components/ui/horizontal-menu/HorizontalMenu';
import { sectionsData } from '~/contants/RelevantData';

function VeganPage() {
    const veganSection = sectionsData.find((section) => section.id === 'desserts');

    if (!veganSection) return null;

    const cards = veganSection.cards.map((card) => ({
        title: card.title,
        description: card.description,
        category: card.tag,
        likes: card.likes,
        views: card.views,
    }));

    const list = veganSection.list;
    return (
        <Box>
            <PageIntro
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />

            {/* Горизонтальное меню без кликов */}
            <HorizontalMenu
                activeCategory='main-courses'
                onCategorySelect={() => {}} // заглушка, ничего не делает
            />

            <RecipesVeganMainSection />
            <RelevantSection
                title={veganSection.title}
                description={veganSection.description}
                cards={cards}
                list={list}
            />
        </Box>
    );
}

export default VeganPage;
