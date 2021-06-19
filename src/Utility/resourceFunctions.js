import * as Resources from "../Resources/TextResources";

const getTextResourceValueByKey = (key) => {
  const resource = Resources.filter((a) => a.key === key && a.lang === "en-US");
  return resource && resource.value;
};
