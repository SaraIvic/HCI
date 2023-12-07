import Hero from "./_components/HeroSection/Hero";
import Card from "./_components/Card/Card";

const cards = [
  {
    title: "Leo",
    text: "Leo, the playful tabby cat, found his way to our shelter after a rough start in life. With love and care, Leo blossomed into a mischievous feline friend, bringing joy to his forever home. Explore Leo's heartwarming story.",
    btnText: "read more",
    imageUrl: "/Leo.jpeg",
  },
  {
    title: "Leonald",
    text: "Leo, the playful tabby cat, found his way to our shelter after a rough start in life. With love and care, Leo blossomed into a mischievous feline friend, bringing joy to his forever home. Explore Leo's heartwarming story.",
    btnText: "read more",
    imageUrl: "/Leo.jpeg",
  },
  {
    title: "Leopold",
    text: "Leo, the playful tabby cat, found his way to our shelter after a rough start in life. With love and care, Leo blossomed into a mischievous feline friend, bringing joy to his forever home. Explore Leo's heartwarming story.",
    btnText: "read more",
    imageUrl: "/Leo.jpeg",
  },
];

const hero01 = {
  index: 0,
  title: "Saving Lives, One Paw at a Time",
  text: "At FurEver, we're on a mission to rescue and rehome animals in need. Our compassionate team, alongside dedicated volunteers, provides loving care and shelter to animals of all kinds. From puppies to seniors, every animal we rescue finds a chance at a better life. Join us in making these stories of hope and happiness possible. Your support changes lives, one wagging tail at a time.",
  buttonText: "Adopt a pet",
  image: {
    src: "/hero-image01.png",
    alt: "Dogs and cats",
  },
};

const hero02 = {
  index: 1,
  title: "Support Our Cause",
  text: "Your generosity fuels our mission to provide love, care, and a better life to animals in need. With your support, we can continue rescuing, rehabilitating, and finding forever homes for these furry friends. Every contribution, no matter the size, makes a meaningful impact.Together, we can give these animals the love and care they deserve. Join us in making a difference.",
  buttonText: "Donate Now",
  image: {
    src: "/hero-image02.png",
    alt: "Dogs and cats",
  },
};

function Home() {
  return (
    <main>
      <Hero {...hero01} />
      {/* {cards.map((card) => (
        <Card {...card} />
      ))} */}
      <Hero {...hero02} />
    </main>
  );
}

export default Home;
