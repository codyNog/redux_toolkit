import { Asset } from "~/domain/entities/Asset";

const getAssets = async (): Promise<Asset[]> => {
  return (await fetch(`/assets}`)).json();
};

const getAsset = async (id: string): Promise<Asset> => {
  return (await fetch(`/assets/${id}`)).json();
};

export const assetImpl = {
  getAsset,
  getAssets
};

export type AssetUseCase = typeof assetImpl;
