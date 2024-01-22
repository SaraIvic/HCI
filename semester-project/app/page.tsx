import Hero from "./_components/HeroSection/Hero";
import CardSlider from "./_components/CardSlider/CardSlider";
import contentfulService from "@/lib/contentfulClient";

async function Home() {
  const animals = await contentfulService.getAllAnimals();
  const heroSectionsText = await contentfulService.getAllHeroSections();

  const image1 = {
    src: "/hero-image01.png",
    alt: "Dogs and cats",
  };

  const image2 = {
    src: "/hero-image02.png",
    alt: "Dogs and cats",
  };

  const cards = animals.map((animal) => ({
    title: animal.title,
    text: animal.description,
    button: {
      text: "Read More",
      href: `aboutUs/${animal.id}`,
    },
    imageUrl: animal.featuredImage.url,
  }));

  const heroSection1 = heroSectionsText.find(
    (heroSection) => heroSection.index === 0
  )!;
  const heroSection2 = heroSectionsText.find(
    (heroSection) => heroSection.index === 1
  )!;
  return (
    <main>
      <Hero {...heroSection1} image={image1} />
      <CardSlider cards={cards} />
      <Hero {...heroSection2} image={image2} />
    </main>
  );
}

export default Home;
