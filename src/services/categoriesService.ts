import HttpClient from "../client/HttpClient";
import { ICategories } from "../models/catogories";

class CategoriesService extends HttpClient {
  public getCategories = async (): Promise<ICategories> => {
    const result = await this.get<ICategories>({ url: "/api_category.php" });

    return result;
  };
}

export default CategoriesService;
