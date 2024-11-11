import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import * as api from '~/api/articles';
import { Article } from '~/components/article';
import { ArticleList } from '~/components/article-list';
import { Button } from '~/components/button';
import { Container } from '~/components/container';
import { HeroSection } from '~/components/hero-section/hero-section';
import { queryClient } from '~/main';
import { getTranslation } from '~/utils/locales';

const HomePage: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);
  const { width } = useWindowSize();

  const { status, data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['articles'],
      queryFn: ({ pageParam }) => api.getArticles({ page: pageParam, limit: 10 }),
      getNextPageParam: (lastGroup) => lastGroup.nextOffset,
      initialPageParam: 1,
    });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

  const rowVirtualizer = useWindowVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    estimateSize: () => (width <= 768 ? 800 : 348),
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  React.useEffect(() => {
    const [lastItem] = [...virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= allRows.length - 1 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, allRows.length, isFetchingNextPage, virtualItems]);

  const deleteArticle = useMutation({
    mutationFn: api.deleteArticle,
  });
  const handleDeleteArticle = (id: string) => {
    deleteArticle.mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['articles'],
        });
      },
    });
  };

  return (
    <>
      <HeroSection />
      <Container>
        {status === 'pending' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <ArticleList>
            {virtualItems.map((virtualRow) => {
              const isLoaderRow = virtualRow.index > allRows.length - 1;
              const article = allRows[virtualRow.index];

              return (
                <div
                  key={virtualRow.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {isLoaderRow ? (
                    hasNextPage ? (
                      'Loading more...'
                    ) : (
                      'Nothing more to load'
                    )
                  ) : (
                    <Link to={`article/${article.id}`} key={article.id}>
                      <Article.Root>
                        <Article.Picture src={article.imageSrc} alt={article.title[lang]} />
                        <Article.Info>
                          <Article.Title>{article.title[lang]}</Article.Title>
                          <Article.Description>{article.description[lang]}</Article.Description>
                        </Article.Info>
                        <Article.Actions>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeleteArticle(article.id);
                            }}
                          >
                            {t('delete')}
                          </Button>
                        </Article.Actions>
                      </Article.Root>
                    </Link>
                  )}
                </div>
              );
            })}
          </ArticleList>
        )}
        <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
      </Container>
    </>
  );
};

export default HomePage;
