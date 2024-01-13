import { Metadata } from "next";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./style.css";
import contentfulService from "@/lib/contentfulClient";

const metadata: Metadata = {
  title: "About Us",
};

interface Params {
  id: string;
}

async function Animal({ params }: { params: Params }) {
  const animal = await contentfulService.getAnimalById(params.id);

  let imgRatio1 = 0;
  let imgRatio2 = 0;
  if (animal) {
    imgRatio1 = animal.featuredImage.height / animal.featuredImage.width;
    if (animal.image) {
      imgRatio2 = animal.image.height / animal.image.width;
    }
  }

  return (
    <>
      {animal && (
        <div className="animal">
          <div className="banner">
            <Image
              className="animal-img"
              src={animal.featuredImage.url}
              width={450}
              height={450 * imgRatio1}
              alt={animal.title}
            />
            <h2>{animal.title}</h2>
          </div>
          <div className="animal-info">
            {documentToReactComponents(animal.moreInfo)}
          </div>
          {animal.image && (
            <Image
              className="animal-img"
              src={animal.image.url}
              width={200}
              height={200 * imgRatio2}
              alt={animal.title}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Animal;
