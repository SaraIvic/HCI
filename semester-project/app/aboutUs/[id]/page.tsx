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

  let imgRatio = 0;
  if (animal) {
    imgRatio = animal.featuredImage.height / animal.featuredImage.width;
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
              height={450 * imgRatio}
              alt={animal.title}
            />
            <h2>{animal.title}</h2>
          </div>
          <div className="animal-info">
            {documentToReactComponents(animal.moreInfo)}
          </div>
          <div className="animal-img-container">
            {animal.imagesCollection &&
              animal.imagesCollection.map((image) => {
                let imageRatio = image.width / image.height;
                return (
                  <Image
                    key={image.url}
                    className="animal-img"
                    src={image.url}
                    width={200 * imageRatio}
                    height={200}
                    alt={animal.title}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Animal;
