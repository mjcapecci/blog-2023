import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllApps, getAppBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IAppUrl = {
  slug: string;
};

type IAppProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

const DisplayApps = (props: IAppProps) => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    }
  >
    <h1 className="text-center font-bold text-3xl text-gray-200">
      {props.title}
    </h1>
    <div className="text-center text-sm mb-8">
      {format(new Date(props.date), 'LLLL d, yyyy')}
    </div>

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IAppUrl> = async () => {
  const apps = getAllApps(['slug']);

  return {
    paths: apps.map((app) => ({
      params: {
        slug: app.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IAppProps, IAppUrl> = async ({
  params,
}) => {
  const app = getAppBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(app.content || '');

  return {
    props: {
      title: app.title,
      description: app.description,
      date: app.date,
      modified_date: app.modified_date,
      image: app.image,
      content,
    },
  };
};

export default DisplayApps;
