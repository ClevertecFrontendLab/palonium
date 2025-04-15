import { Box } from '@chakra-ui/react';

import PageIntro from '~/components/sections/pageintro/PageIntro';
import { RecipesJuicySection } from '~/components/sections/RecipesSection/RecipesJuicySection';
import { RelevantSection } from '~/components/sections/RelevantSection/RelevantSection';
import { sectionsData } from '~/contants/RelevantData';
function JuicyPage() {
    const veganSection = sectionsData.find((section) => section.id === 'vegan');

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
            <PageIntro title='Самое сочное' />
            <RecipesJuicySection />
            <RelevantSection
                title={veganSection.title}
                description={veganSection.description}
                cards={cards}
                list={list}
            />
        </Box>
    );
}

export default JuicyPage;
