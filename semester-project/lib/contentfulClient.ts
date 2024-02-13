const getAllAnimalsQuery = `query AnimalList {
  animalCollection {
    items {
      sys {
        id
      }
      title
      description
      featuredImage {
        url
        height
        width
      }
      animalType
    }
  }
}`;

const getAnimalByIdQuery = `query GetAnimalById($id: String!) {
  animal(id: $id) {
    sys {
      id
    }
    title
    description
    featuredImage {
      url
      height
      width
    }
    imagesCollection {
      items {
        url
        width
        height
      }
    }
    animalType
    moreInfo {
      json
    }
  }
}`;

const getAllAnimalTypesQuery = `query {
  animalCollection {
    items {
      animalType
    }
  }
}`;

const getAllHeroSectionsQuery = `query HeroSectionList{
  heroSectionCollection {
    items {
      index
      title
      text
			buttonText
      buttonUrl
    }
  }
}`;

const getAboutUsTextQuery = `query AboutUsText{
  aboutUsCollection {
     items {
       text {
         json
       }
     }
   }
}`

const getGetInvolvedTextQuery = `query GetInvolvedText {
  getInvolvedCollection {
    items {
      mainTitle
      subtitle
      mainInfo
      volonteerTitle
      volonteerInfo
      donateTitle
      donateInfo
    }
  }
}`

interface AnimalCollectionResponse {
  animalCollection: {
    items: Animal[];
  }
}

interface Animal {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  featuredImage: Image;
  animalType: "cat" | "dog" | "other"
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface DetailAnimalResponse {
    animal: {
      sys: {
        id: string;
      };
      moreInfo: {
        json: {
          data: {};
          content: {
            data: {};
            content: {
              data: {};
              marks: {
                type: string;
              }[];
              value: string;
              nodeType: string;
            }[];
            nodeType: string;
          }[];
          nodeType: string;
        };
      };
      title: string;
      description: string;
      featuredImage: Image;
      imagesCollection?: {
        items: Image[];
      }
      animalType: "cat" | "dog" | "other";
    };
}

export interface TypeAnimalListItem {
  id: string;
  title: string;
  description: string;
  featuredImage: Image;
  animalType: "cat" | "dog" | "other";
}

interface TypeAnimalDetailItem extends TypeAnimalListItem {
  moreInfo: any;
  imagesCollection?: Image[];
}

interface AnimalTypesCollectionResponse {
  animalCollection: {
    items: AnimalTypes[]
  }
}

interface AnimalTypes {
  animalType: string;
}
interface HeroSection {
  index: number;
  title: string;
  text: string;
  buttonText: string
  buttonUrl: string;
}

interface  TypeHeroSectionListItem{
    index: number;
    title: string;
    text: string;
    button: {
      text: string;
      href: string;
    },
}

interface HeroSectionCollectionResponse {
  heroSectionCollection: {
    items: HeroSection[];
  }
}

interface getInvolvedData {
  mainTitle: string;
  subtitle: string;
  mainInfo: string;
  volonteerTitle: string;
  volonteerInfo: string;
  donateTitle: string;
  donateInfo: string;
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllAnimals = async (): Promise<TypeAnimalListItem[]>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllAnimalsQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const body = (await response.json()) as {
      data: AnimalCollectionResponse;
    };

    // Map the response to the format we want
    const animals =
      body.data.animalCollection.items.map((item) => ({
        id: item.sys.id,
        title: item.title,
        description: item.description,
        featuredImage: item.featuredImage,
        animalType: item.animalType
      }));

    return animals;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAnimalById = async (
  id: string
): Promise<TypeAnimalDetailItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        query: getAnimalByIdQuery,
        variables: { id },
      }),
    });

    const body = (await response.json()) as {
      data: DetailAnimalResponse;
    };

    const responseAnimal = body.data.animal;
  
    const animal = {
      id,
      title: responseAnimal.title,
      description: responseAnimal.description,
      featuredImage: responseAnimal.featuredImage,
      imagesCollection: responseAnimal.imagesCollection?.items,
      moreInfo: responseAnimal.moreInfo.json,
      animalType: responseAnimal.animalType
    };

    return animal;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const getAllAnimalTypes = async (): Promise<AnimalTypes[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllAnimalTypesQuery }),
    });
    const body = (await response.json()) as {
      data: AnimalTypesCollectionResponse;
    };

    const animalTypes: AnimalTypes[] = body.data.animalCollection.items.map(
      (item) => ({
        animalType: item.animalType,
      })
    );

    return animalTypes;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAllHeroSections= async (): Promise<TypeHeroSectionListItem[]>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllHeroSectionsQuery }),
    });

    const body = (await response.json()) as {
      data: HeroSectionCollectionResponse;
    };

    const heroSections =
      body.data.heroSectionCollection.items.map((item) => ({
        index: item.index,
        title: item.title,
        text: item.text,
        button: {
          text: item.buttonText,
          href: item.buttonUrl
        },
      }));

    return heroSections;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAboutUsText= async (): Promise<any>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAboutUsTextQuery }),
    });

    const body = (await response.json()) as {
      data: any;
    };

    const text = body.data.aboutUsCollection.items[0].text.json;

    return text;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const getGetInvolvedText= async (): Promise<getInvolvedData | null>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getGetInvolvedTextQuery }),
    });

    const body = (await response.json()) as {
      data: any;
    };

    const text = body.data.getInvolvedCollection.items[0];

    return text;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const contentfulService = {
  getAllAnimals,
  getAnimalById,
  getAllAnimalTypes,
  getAllHeroSections,
  getAboutUsText,
  getGetInvolvedText,
};

export default contentfulService;