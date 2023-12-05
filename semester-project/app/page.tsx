import Hero from "./_components/HeroSection/Hero";
import HeroProps from "./_components/HeroSection/Hero";

const heroProps = {
  title: "Saving Lives, One Paw at a Time",
  text: "At FurEver, we're on a mission to rescue and rehome animals in need. Our compassionate team, alongside dedicated volunteers, provides loving care and shelter to animals of all kinds. From puppies to seniors, every animal we rescue finds a chance at a better life. Join us in making these stories of hope and happiness possible. Your support changes lives, one wagging tail at a time.",
  buttonText: "Adopt a pet",
};

function Home() {
  return (
    <main>
      <Hero {...heroProps} />
    </main>
  );
}

export default Home;
