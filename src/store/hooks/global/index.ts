import {
  useState,
  useCallback,
  useContext,
  createContext,
  useEffect
} from "react";
import { backend } from "~/domain/backend";
import { Asset } from "~/domain/entities/Asset";

interface Context {
  assets: Asset[];
}

export const AssetContext = createContext<Context>({
  assets: []
});

export const useGlobal = () => {
  const [assets, setAssets] = useState([]);

  const getAssets = useCallback(async () => {
    const assets = await backend.asset.getAssets();
    setAssets(assets);
  }, [setAssets]);

  useEffect(() => {
    getAssets();
  }, [getAssets]);

  return { assets, setAssets };
};
