import { Metadata } from "next";
import Card from "../_components/Card/Card";
import "./style.css";
import contentfulService from "@/lib/contentfulClient";
import Cards from "../_components/Cards/Cards";

export const metadata: Metadata = {
  title: "About Us",
};

async function AboutUs() {
  const animals = await contentfulService.getAllAnimals();
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h2>ABOUT FUREVER</h2>
        <p>
          At FurEver, our passion drives our mission – a mission to rescue and
          rehome animals in need. With a dedicated and compassionate team
          working alongside our committed volunteers, we provide unwavering
          love, care, and shelter to animals of all kinds.
        </p>
        <h2>OUR COMMITMENT</h2>
        <p>
          Every life we touch, from the playful puppies to the wise seniors, is
          a story of hope and transformation. We believe in giving each rescued
          animal a chance at a better life, filled with joy and companionship.
          Through our tireless efforts, we strive to create a world where
          wagging tails and happy purrs are the soundtrack to every home.
        </p>
        <h2>THE FUREVER FAMILY</h2>
        <p>
          Our team is not just a group of professionals – we're a family united
          by a shared love for animals. Each member brings unique skills and
          boundless compassion to our cause. Together, we work towards the
          common goal of making a positive impact on the lives of our furry
          friends.
        </p>
        <h2>SUCCESS STORIES</h2>
        <p>
          At FurEver, our proudest moments come from the heartwarming success
          stories that unfold within our community. Each tale is a testament to
          the transformative power of love and compassion. From the once-shy
          rescue cat who found their forever cuddle buddy to the energetic pup
          that overcame challenges to become a beloved family member – these
          stories inspire us daily. We celebrate not only the resilience of the
          animals we rescue but also the incredible bond formed between them and
          their adoptive families. Every success story is a shared victory, a
          reminder that together, we are making a tangible difference in the
          lives of these furry companions. Explore these narratives of hope,
          joy, and second chances, and witness the incredible transformations
          that happen when love knows no bounds.
        </p>
      </div>
      <Cards animals={animals} />
    </div>
  );
}

export default AboutUs;
