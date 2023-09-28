import { createClient } from "microcms-js-sdk";
import { MicroCMSQueries } from "microcms-js-sdk";
// const { createClient, MicroCMSQueries } = require('microcms-js-sdk');

const client = createClient ({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

export const getBlogs =async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({endpoint: "blogs", queries});
}

export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: blogId,
    queries,
  });
};