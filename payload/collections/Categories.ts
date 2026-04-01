import type { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre de la Categoría",
    },
  ],
};

export default Categories;
