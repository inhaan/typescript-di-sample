import { typeInfo } from "../container";
import { constructor } from "../types";

const injectable = (key: any) => {
  return (target: constructor) => {
    typeInfo.set(key, target);
  };
};

export default injectable;
