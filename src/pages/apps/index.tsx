import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../../blog/BlogGallery';
import { Meta } from '../../layout/Meta';
import { IPaginationProps } from '../../pagination/Pagination';
import { Main } from '../../templates/Main';
import { AppConfig } from '../../utils/AppConfig';
import { getAllApps } from '../../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Apps" description={AppConfig.description} />}>
    <BlogGallery
      items={props.items}
      pagination={props.pagination}
      itemType="apps"
    />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const apps = getAllApps(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (apps.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      items: apps.slice(0, AppConfig.pagination_size),
      pagination,
      itemType: 'apps',
    },
  };
};

export default Index;
