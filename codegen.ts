import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app/",
  documents: ["queries/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
  },
};

export default config;
