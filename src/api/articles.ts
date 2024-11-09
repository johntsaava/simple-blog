import { httpClient } from '.';

type Translation = Record<string, string>;

export type Article = {
  id: string;
  imageSrc: string;
  title: Translation;
  description: Translation;
};

const errorMessage = 'Oops! Something went wrong. Please try again later.';

export const getArticles = async () => {
  try {
    const res = await httpClient.get<Article[]>('/articles');
    return res.data;
  } catch (error) {
    console.error(error);
    throw errorMessage;
  }
};

export const getArticle = async (id: string) => {
  try {
    const res = await httpClient.get<Article>(`/articles/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw errorMessage;
  }
};

export const createArticle = async (values: Omit<Article, 'id'>) => {
  try {
    const res = await httpClient.post<Article>('/articles', values);
    return res.data;
  } catch (error) {
    console.error(error);
    throw errorMessage;
  }
};

export const deleteArticle = async (id: string) => {
  try {
    await httpClient.delete(`/articles/${id}`);
    return true;
  } catch (error) {
    console.error(error);
    throw errorMessage;
  }
};
