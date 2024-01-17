import { useEffect, useState } from "react";
import CategoriesService from "../services/categoriesService";
import { ICategory } from "../models/catogories";


interface IResults {
  categories: ICategory[];
}

const useCategories = (): IResults => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const categoriesService = new CategoriesService();

    categoriesService.getCategories().then((res) => {
      setCategories(res.trivia_categories);
    });
  }, []);

  return {
    categories,
  };
};

export default useCategories;
