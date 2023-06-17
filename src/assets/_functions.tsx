import { Resolution } from "../types/Resolution";

export const handleItemsPerPageCalculate = (resolution: Resolution) => {
  console.log(resolution);
  switch (resolution) {
    case Resolution.MOBILE:
      return 2;
    case Resolution.TABLET:
      return 3;
    case Resolution.DESKTOP:
      return 4;
  }
};
