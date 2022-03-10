import { Bigtable } from "@google-cloud/bigtable";
import { getRandomScript } from "./scriptProviser.js";
import { v4 as uuidv4 } from "uuid";

export const handle = async (event, context) => {
  const script = getRandomScript();
  const result = await script();

  const bigtable = new Bigtable();

  const instance = bigtable.instance("registry-api-scripts");
  const table = instance.table("results");

  const insertData = {
    key: uuidv4(),
    data: {
      result: {
        value: result,
      },
    },
  };

  await table.insert(insertData);
};
