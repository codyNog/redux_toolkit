import { useAssetList } from "~/store/hooks/organisms/AssetList";

interface Props {
  // id: string
}

export const AssetList: React.FC<Props> = () => {
  const { assets } = useAssetList();

  return null;
};
