import resources from "../Resources/TextResources";

export const getTextResourceValueByKey = (key) => {
  const resource = resources.filter((a) => a.key === key && a.lang === "en-US");
  return resource && resource[0].value;
};
