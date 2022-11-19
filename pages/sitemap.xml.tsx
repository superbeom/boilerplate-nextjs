import { GetServerSideProps } from "next";

import prismaClient from "@/lib/prisma";
import { Example } from "@/types/exampleTypes";

const createSitemap = (
  pageUrls: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pageUrls
          .map((pageUrl) => {
            return `
                <url>
                    <loc>${`${process.env.NEXT_PUBLIC_BASE_URL}/${pageUrl}`}</loc>
                    <lastmod>${
                      process.env.NEXT_PUBLIC_UPDATE_PAGE_DATE
                    }</lastmod>
                </url>
            `;
          })
          .join("")}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const examples = await prismaClient.example.findMany();
  const examplePageUrls = examples.map(
    (example: Example) => `example/${example.slug}`
  );

  const pageUrls = [
    "",
    "privacy-policy",
    "terms-of-service",
    ...examplePageUrls,
  ];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(createSitemap(pageUrls));
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
