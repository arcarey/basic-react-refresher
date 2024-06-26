import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StoryList from "./Story-List";
import { Story } from "@/Interfaces/story.interface";

const mockStoryList: Array<Story> = [{
    "section": "world",
    "subsection": "europe",
    "title": "Pardoned for Serving in Ukraine, They Return to Russia to Kill Again",
    "abstract": "Recruiting convicts for its army has given Russia a manpower advantage. But it is backfiring in tragic ways when former inmates are pardoned and return home to commit new crimes.",
    "url": "https://www.nytimes.com/2024/04/06/world/europe/russia-convicts-war-murder.html",
    "uri": "nyt://article/3c276ce0-57dd-51a2-a9e2-f1cad6f02147",
    "byline": "By Neil MacFarquhar and Milana Mazaeva",
    "item_type": "Article",
    "updated_date": new Date("2024-04-06T09:48:20-04:00"),
    "created_date": new Date("2024-04-06T05:02:13-04:00"),
    "published_date": new Date("2024-04-06T05:02:13-04:00"),
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
      "Amnesties, Commutations and Pardons",
      "Russian Invasion of Ukraine (2022)",
      "Mercenaries and Private Military Contractors"
    ],
    "org_facet": [
      "Wagner Group",
      "Russia Behind Bars"
    ],
    "per_facet": [
      "Putin, Vladimir V"
    ],
    "geo_facet": [
      "Krasnodar (Russia)",
      "Novosibirsk (Russia)",
      "Rostov-on-Don (Russia)",
      "Russia",
      "Siberia",
      "Ukraine"
    ],
    "multimedia": [
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-superJumbo.jpg",
        "format": "Super Jumbo",
        "height": 1463,
        "width": 2048,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      },
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-threeByTwoSmallAt2X.jpg",
        "format": "threeByTwoSmallAt2X",
        "height": 400,
        "width": 600,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      },
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-thumbLarge.jpg",
        "format": "Large Thumbnail",
        "height": 150,
        "width": 150,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      }
    ],
    "short_url": ""
    },{
      "section": "world",
      "subsection": "europe",
      "title": "Pardoned for Serving in Ukraine, They Return to Russia to Kill Again",
      "abstract": "Recruiting convicts for its army has given Russia a manpower advantage. But it is backfiring in tragic ways when former inmates are pardoned and return home to commit new crimes.",
      "url": "https://www.nytimes.com/2024/04/06/world/europe/russia-convicts-war-murder.html",
      "uri": "nyt://article/3c276ce0-57dd-51a2-a9e2-f1cad6f02146",
      "byline": "By Neil MacFarquhar and Milana Mazaeva",
      "item_type": "Article",
      "updated_date": new Date("2024-04-06T09:48:20-04:00"),
      "created_date": new Date("2024-04-06T05:02:13-04:00"),
      "published_date": new Date("2024-04-06T05:02:13-04:00"),
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Amnesties, Commutations and Pardons",
        "Russian Invasion of Ukraine (2022)",
        "Mercenaries and Private Military Contractors"
      ],
      "org_facet": [
        "Wagner Group",
        "Russia Behind Bars"
      ],
      "per_facet": [
        "Putin, Vladimir V"
      ],
      "geo_facet": [
        "Krasnodar (Russia)",
        "Novosibirsk (Russia)",
        "Rostov-on-Don (Russia)",
        "Russia",
        "Siberia",
        "Ukraine"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-superJumbo.jpg",
          "format": "Super Jumbo",
          "height": 1463,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
          "copyright": "Nanna Heitmann for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-threeByTwoSmallAt2X.jpg",
          "format": "threeByTwoSmallAt2X",
          "height": 400,
          "width": 600,
          "type": "image",
          "subtype": "photo",
          "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
          "copyright": "Nanna Heitmann for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-thumbLarge.jpg",
          "format": "Large Thumbnail",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
          "copyright": "Nanna Heitmann for The New York Times"
        }
      ],
      "short_url": ""
      }];

const mockFilteredStoryList: Array<Story> = [{
    "section": "world",
    "subsection": "europe",
    "title": "Pardoned for Serving in Ukraine, They Return to Russia to Kill Again",
    "abstract": "Recruiting convicts for its army has given Russia a manpower advantage. But it is backfiring in tragic ways when former inmates are pardoned and return home to commit new crimes.",
    "url": "https://www.nytimes.com/2024/04/06/world/europe/russia-convicts-war-murder.html",
    "uri": "nyt://article/3c276ce0-57dd-51a2-a9e2-f1cad6f02147",
    "byline": "By Neil MacFarquhar and Milana Mazaeva",
    "item_type": "Article",
    "updated_date": new Date("2024-04-06T09:48:20-04:00"),
    "created_date": new Date("2024-04-06T05:02:13-04:00"),
    "published_date": new Date("2024-04-06T05:02:13-04:00"),
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
      "Amnesties, Commutations and Pardons",
      "Russian Invasion of Ukraine (2022)",
      "Mercenaries and Private Military Contractors"
    ],
    "org_facet": [
      "Wagner Group",
      "Russia Behind Bars"
    ],
    "per_facet": [
      "Putin, Vladimir V"
    ],
    "geo_facet": [
      "Krasnodar (Russia)",
      "Novosibirsk (Russia)",
      "Rostov-on-Don (Russia)",
      "Russia",
      "Siberia",
      "Ukraine"
    ],
    "multimedia": [
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-superJumbo.jpg",
        "format": "Super Jumbo",
        "height": 1463,
        "width": 2048,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      },
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-threeByTwoSmallAt2X.jpg",
        "format": "threeByTwoSmallAt2X",
        "height": 400,
        "width": 600,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      },
      {
        "url": "https://static01.nyt.com/images/2024/03/21/multimedia/00russia-murders-01-fgbh/00russia-murders-01-fgbh-thumbLarge.jpg",
        "format": "Large Thumbnail",
        "height": 150,
        "width": 150,
        "type": "image",
        "subtype": "photo",
        "caption": "A Russian military recruitment billboard saying, “Heroes are not born, they are made,” last year in Ulan-Ude, Russia. Veterans who survive the front line return to Russia as heroes with an elevated status in society.",
        "copyright": "Nanna Heitmann for The New York Times"
      }
    ],
    "short_url": ""
    }

]

// eslint-disable-next-line
let container: any = null;

describe( StoryList , () => {
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
  
    it('renders the story page 2 stories', () => {
        act(() => {
            render(<StoryList filteredStoryList={mockFilteredStoryList} storyList={mockStoryList} />, container);
        });
      expect(container.querySelector('div').childElementCount).toBe(2);
    });

})