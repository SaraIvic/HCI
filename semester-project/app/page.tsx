import Hero from "./_components/HeroSection/Hero";
import CardSlider from "./_components/CardSlider/CardSlider";

const hero01 = {
  index: 0,
  title: "Saving Lives, One Paw at a Time",
  text: "At FurEver, we're on a mission to rescue and rehome animals in need. Our compassionate team, alongside dedicated volunteers, provides loving care and shelter to animals of all kinds. From puppies to seniors, every animal we rescue finds a chance at a better life. Join us in making these stories of hope and happiness possible. Your support changes lives, one wagging tail at a time.",
  button: {
    text: "Adopt a pet",
    href: "/adoption",
  },
  image: {
    src: "/hero-image01.png",
    alt: "Dogs and cats",
  },
};

const hero02 = {
  index: 1,
  title: "Support Our Cause",
  text: "Your generosity fuels our mission to provide love, care, and a better life to animals in need. With your support, we can continue rescuing, rehabilitating, and finding forever homes for these furry friends. Every contribution, no matter the size, makes a meaningful impact.Together, we can give these animals the love and care they deserve. Join us in making a difference.",
  button: {
    text: "Donate now",
    href: "/getInvolved",
  },
  image: {
    src: "/hero-image02.png",
    alt: "Dogs and cats",
  },
};

const cards = [
  {
    title: "Simba",
    text: "Simba, the charming mix of Egzota and British Shorthair, embodies the best of both worlds. With a blend of exotic allure and British sophistication, Simba captivates hearts with his unique charm. Uncover the fascinating tale of Simba's journey to a home filled with love and admiration.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Simba.jpeg",
  },
  {
    title: "Bella",
    text: "Meet Bella, a lovable Golden Retriever who overcame adversity. Bella was rescued from a neglectful situation and, with the support of our shelter, she transformed into a happy companion. Read more about Bella's incredible journey.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Bella.jpeg",
  },
  {
    title: "Leo",
    text: "Leo, the playful tabby cat, found his way to our shelter after a rough start in life. With love and care, Leo blossomed into a mischievous feline friend, bringing joy to his forever home. Explore Leo's heartwarming story.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Leo.jpeg",
  },
  {
    title: "Max",
    text: "Max, a loyal German Shepherd, was rescued from a challenging situation. Thanks to the dedication of our shelter, Max has become a guardian and best friend to his adoptive family. Learn more about Max's incredible transformation.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Max.png",
  },
  {
    title: "Rocky",
    text: "Rocky, the resilient Boxer mix, faced adversity with courage and determination. His story is a testament to the indomitable spirit of rescue animals. Learn more about Rocky's journey to recovery and joy.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Rocky.jpeg",
  },
  {
    title: "Luna",
    text: "Meet Luna, the adventurous Siamese cat with a captivating personality. Luna's journey from the streets to a loving home is a tale of resilience and charm. Discover more about Luna's escapades.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Luna.jpeg",
  },
  {
    title: "Charlie",
    text: "Charlie, the energetic Border Collie, found a second chance at happiness in our shelter. His agility and intelligence make him a perfect companion for an active family. Read about Charlie's boundless enthusiasm.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Charlie.jpeg",
  },
  {
    title: "Mia",
    text: "Mia, the gentle Persian cat, came to us seeking warmth and care. Mia's graceful demeanor and soothing presence make her a beloved member of her forever home. Explore Mia's story of tranquility and love.",
    button: { text: "Read more", href: "aboutUs" },
    imageUrl: "/Mia.jpeg",
  },
];

function Home() {
  return (
    <main>
      <Hero {...hero01} />
      <CardSlider cards={cards} />
      <Hero {...hero02} />
    </main>
  );
}

export default Home;
