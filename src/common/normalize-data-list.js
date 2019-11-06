import { normalize, schema } from "normalizr";

export default function normalizeDataList(dataList, listName) {
  const entity = new schema.Entity(listName);
  const normalizedDataList = normalize(
    { [listName]: dataList.offers },
    {
      [listName]: [entity]
    }
  );
  return normalizedDataList;
}
