import type { Metadata } from "next";
import config from "@payload-config";
import { NotFoundPage, generatePageMetadata } from "@payloadcms/next/views";

type Args = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = async ({
  params,
  searchParams,
}: Args): Promise<Metadata> => {
  return generatePageMetadata({ config, params, searchParams });
};

const NotFound = async ({ params, searchParams }: Args) => {
  return NotFoundPage({ config, params, searchParams });
};

export default NotFound;
