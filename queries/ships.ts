import { graphql } from "../gql";

export const queryAllShips = graphql(`
  query queryAllShips {
    ships {
      id
      name
    }
  }
`).toString();
