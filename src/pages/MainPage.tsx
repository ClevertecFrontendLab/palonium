import { Box } from '@chakra-ui/icons';

import { BloggersSection } from '~/components/sections/bloggerSection/BloggerSection';
import PageIntro from '~/components/sections/pageintro/PageIntro';
import { RecipesCarousel } from '~/components/sections/RecipesCarousel/RecipesCarousel';
import { RecipesJuicyMainSection } from '~/components/sections/RecipesSection/RecipesJuicyMainSection';
import { RelevantSection } from '~/components/sections/RelevantSection/RelevantSection';
import { sectionsData } from '~/contants/RelevantData';

function MainPage() {
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
        <Box px={1}>
            <PageIntro title='Приятного аппетита!' />
            <RecipesCarousel />
            <RecipesJuicyMainSection />
            <BloggersSection />
            <RelevantSection
                title={veganSection.title}
                description={veganSection.description}
                cards={cards}
                list={list}
            />
        </Box>
    );
}

export default MainPage;
