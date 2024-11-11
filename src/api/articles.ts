import { httpClient } from '.';

type Translation = Record<string, string>;

export type Article = {
  id: string;
  imageSrc: string;
  title: Translation;
  description: Translation;
};

const errorMessage = 'Oops! Something went wrong. Please try again later.';

// Function to get the page number by relation type (e.g., "next")
function getNextPageNumber(relType: string, pagination: string) {
  const regex = new RegExp(`<[^>]*[?&]_page=(\\d+)[^>]*>; rel="${relType}"`);
  const match = pagination.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

export const getArticles = async ({ page, limit }: { page: number; limit: number }) => {
  try {
    const res = await httpClient.get<Article[]>(`/articles?_page=${page}&_limit=${limit}`);
    return { rows: res.data, nextOffset: getNextPageNumber('next', res.headers.link) };
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
