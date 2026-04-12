import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@payloadcms/db-postgres", "drizzle-kit"],
};

export default withPayload(nextConfig);
