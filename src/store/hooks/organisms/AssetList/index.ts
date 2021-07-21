import { useContext } from "react";
import { AssetContext } from "~/store/hooks/global";

export const useAssetList = () => {
  const { assets } = useContext(AssetContext);

  return { assets };
};
