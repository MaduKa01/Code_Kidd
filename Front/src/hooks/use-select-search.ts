import _ from "lodash";
import { useState } from "react";

import useLoading from "./use-loading";

type TUseSelectSearchReturn<T> = {
  search: string;
  onSearch: (value: string) => void;
  isLoading: boolean;
  clearSearch: () => void;
  selectItem: (item: T | null) => void;
  itemSelected: T | null;
};

type TUseSelectSearchProps = {
  debounceDelay?: number;
};
const DEBOUNCE_DEFAULT_DELAY = 1000;

function useSelectSearch<T>(props?: TUseSelectSearchProps): TUseSelectSearchReturn<T> {
  const { debounceDelay = DEBOUNCE_DEFAULT_DELAY } = props || {};
  const { startLoading, endLoading, isLoading } = useLoading();
  const [search, setSearch] = useState("");
  const [itemSelected, selectItem] = useState<T | null>(null);

  const debouncedSetSearchSKU = _.debounce((value) => {
    setSearch(value);
    endLoading();
  }, debounceDelay);

  const onSearch = (value: string) => {
    startLoading();
    debouncedSetSearchSKU(value);
  };

  const clearSearch = () => setSearch("");
  return {
    search,
    onSearch,
    isLoading,
    clearSearch,
    itemSelected,
    selectItem,
  };
}

export default useSelectSearch;
