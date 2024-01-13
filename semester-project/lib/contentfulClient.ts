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
}`

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

interface TypeAnimalListItem {
  id: string
  title: string
  description: string
  featuredImage: Image
  animalType: "cat" | "dog" | "other"
}

interface TypeAnimalDetailItem extends TypeAnimalListItem {
  moreInfo: any
  imagesCollection?: Image[];
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

const contentfulService = {
  getAllAnimals,
  getAnimalById
};

export default contentfulService;