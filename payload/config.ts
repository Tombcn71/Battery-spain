import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import Users from "./collections/Users";
import Products from "./collections/Products";
import Categories from "./collections/Categories";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: "users",
  },
  collections: [Users, Products, Categories, Media],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
});
