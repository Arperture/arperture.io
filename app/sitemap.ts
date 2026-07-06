import type { MetadataRoute } from "next";
import { BLOG_POSTS, CASES } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://arperture.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/services/", "/small-business/", "/portfolio/", "/enhancement/",
    "/about/", "/training/", "/blog/", "/faq/", "/contact/", "/privacy/",
  ];
  const caseRoutes = Object.keys(CASES).map((slug) => `/portfolio/${slug}/`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}/`);

  return [...staticRoutes, ...caseRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
