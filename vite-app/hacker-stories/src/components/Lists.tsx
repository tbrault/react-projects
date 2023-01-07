import { Website } from "../interface/Website";
import Item from "./Item";

function List({ websites }: { websites: Website[] }): JSX.Element {
  return (
    <ul>
      {websites.map(({ objectID, websiteCharacteristic }) => {
        return <Item key={objectID} {...websiteCharacteristic} />;
      })}
    </ul>
  );
}

export default List;
