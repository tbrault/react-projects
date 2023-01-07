export interface Website {
  websiteCharacteristic: WebsiteCharacteristic;
  objectID: number;
}

export interface WebsiteCharacteristic {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
}
