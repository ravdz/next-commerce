/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetCategories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery GetCategoriesWithProducts {\n  categories {\n    data {\n      id\n      slug\n      name\n      products {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}": types.GetCategoriesDocument,
    "query GetCollection($slug: String!) {\n  collection(slug: $slug) {\n    id\n    name\n    slug\n    description\n    products {\n      id\n      slug\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}": types.GetCollectionDocument,
    "query GetCollections {\n  collections {\n    data {\n      name\n      slug\n      id\n    }\n    meta {\n      total\n    }\n  }\n}": types.GetCollectionsDocument,
    "query GetProductById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n      slug\n      id\n    }\n    price\n    images {\n      url\n      alt\n    }\n    reviews {\n      id\n    }\n    rating\n  }\n}": types.GetProductByIdDocument,
    "query GetProducts($take: Int!, $skip: Int!, $orderBy: ProductSortBy = DEFAULT, $order: SortDirection = ASC) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    meta {\n      total\n    }\n    data {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}\n\nquery GetProductsByName($search: String!) {\n  products(search: $search) {\n    meta {\n      total\n    }\n    data {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}": types.GetProductsDocument,
    "query GetTotalNumberOfCategories {\n  categories {\n    meta {\n      total\n    }\n  }\n}": types.GetTotalNumberOfCategoriesDocument,
    "query GetTotalNumberOfProducts {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.GetTotalNumberOfProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery GetCategoriesWithProducts {\n  categories {\n    data {\n      id\n      slug\n      name\n      products {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollection($slug: String!) {\n  collection(slug: $slug) {\n    id\n    name\n    slug\n    description\n    products {\n      id\n      slug\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollections {\n  collections {\n    data {\n      name\n      slug\n      id\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').GetCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n      slug\n      id\n    }\n    price\n    images {\n      url\n      alt\n    }\n    reviews {\n      id\n    }\n    rating\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts($take: Int!, $skip: Int!, $orderBy: ProductSortBy = DEFAULT, $order: SortDirection = ASC) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    meta {\n      total\n    }\n    data {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}\n\nquery GetProductsByName($search: String!) {\n  products(search: $search) {\n    meta {\n      total\n    }\n    data {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTotalNumberOfCategories {\n  categories {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').GetTotalNumberOfCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTotalNumberOfProducts {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').GetTotalNumberOfProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
