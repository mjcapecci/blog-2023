import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems, AppItems } from '../utils/Content';

export type IBlogGalleryProps = {
  items: PostItems[] | AppItems[];
  itemType: 'posts' | 'apps';
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.items.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link
            href={`/${props.itemType}/[slug]`}
            as={`/${props.itemType}/${elt.slug}`}
          >
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
