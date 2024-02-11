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

  let imageRatio = 0;
  if (animal) {
    imageRatio = animal.featuredImage.height / animal.featuredImage.width;
  }

  return (
    <>
      {animal && (
        <div className="animal">
          <div className="banner">
            <Image
              className="animal-img animal-main-img"
              src={animal.featuredImage.url}
              width={450}
              height={450 * imageRatio}
              alt={animal.title}
            />
            <h2>{animal.title}</h2>
          </div>
          <div className="animal-info">
            {documentToReactComponents(animal.moreInfo)}
          </div>
          {animal.imagesCollection && animal.imagesCollection?.length !== 0 && (
            <>
              <h3>More photos:</h3>
              <div className="animal-img-container">
                {animal.imagesCollection.map((image) => {
                  let imageRatio = image.width / image.height;
                  return (
                    <Image
                      key={image.url}
                      className="animal-img"
                      src={image.url}
                      width={235 * imageRatio}
                      height={235}
                      alt={animal.title}
                    />
                  );
                })}
              </div>
              <button>ADOPT ME</button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Animal;
