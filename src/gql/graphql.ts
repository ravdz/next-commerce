/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type AddProductToCartMutationVariables = Exact<{
  input: MutationCartAddItemInput;
  id: Scalars['ID']['input'];
}>;


export type AddProductToCartMutation = { cartAddItem: { id: string } };

export type ChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type ChangeItemQuantityMutation = { cartChangeItemQuantity: { items: Array<{ quantity: number, product: { name: string, id: string } }> } };

export type GetCartByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCartByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { name: string, price: number, id: string, slug: string, images: Array<{ url: string, alt: string }> } }> } | null };

export type GetOrCreateCartMutationVariables = Exact<{
  input: MutationCartFindOrCreateInput;
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetOrCreateCartMutation = { cartFindOrCreate: { id: string } };

export type RemoveItemFromCartMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type RemoveItemFromCartMutation = { cartRemoveItem: { id: string, items: Array<{ quantity: number, product: { name: string, price: number, id: string, slug: string, images: Array<{ url: string, alt: string }> } }> } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { categories: { data: Array<{ id: string, slug: string, name: string }>, meta: { total: number } } };

export type GetCategoriesWithProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesWithProductsQuery = { categories: { data: Array<{ id: string, slug: string, name: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }> }> }> } };

export type GetCollectionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCollectionQuery = { collection?: { id: string, name: string, slug: string, description: string, products: Array<{ id: string, slug: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }> }> } | null };

export type GetCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionsQuery = { collections: { data: Array<{ name: string, slug: string, id: string }>, meta: { total: number } } };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProductByIdQuery = { product?: { id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string, slug: string, id: string }>, images: Array<{ url: string, alt: string }>, reviews: Array<{ id: string }> } | null };

export type GetProductsQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<ProductSortBy>;
  order?: InputMaybe<SortDirection>;
}>;


export type GetProductsQuery = { products: { meta: { total: number }, data: Array<{ id: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }> }> } };

export type GetProductsByNameQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetProductsByNameQuery = { products: { meta: { total: number }, data: Array<{ id: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }> }> } };

export type GetTotalNumberOfCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalNumberOfCategoriesQuery = { categories: { meta: { total: number } } };

export type GetTotalNumberOfProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalNumberOfProductsQuery = { products: { meta: { total: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const AddProductToCartDocument = new TypedDocumentString(`
    mutation AddProductToCart($input: MutationCartAddItemInput!, $id: ID!) {
  cartAddItem(id: $id, input: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<AddProductToCartMutation, AddProductToCartMutationVariables>;
export const ChangeItemQuantityDocument = new TypedDocumentString(`
    mutation ChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    items {
      product {
        name
        id
      }
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>;
export const GetCartByIdDocument = new TypedDocumentString(`
    query GetCartById($id: ID!) {
  cart(id: $id) {
    id
    items {
      quantity
      product {
        name
        price
        id
        slug
        images {
          url
          alt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCartByIdQuery, GetCartByIdQueryVariables>;
export const GetOrCreateCartDocument = new TypedDocumentString(`
    mutation GetOrCreateCart($input: MutationCartFindOrCreateInput!, $id: ID = "") {
  cartFindOrCreate(input: $input, id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<GetOrCreateCartMutation, GetOrCreateCartMutationVariables>;
export const RemoveItemFromCartDocument = new TypedDocumentString(`
    mutation RemoveItemFromCart($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    id
    items {
      quantity
      product {
        name
        price
        id
        slug
        images {
          url
          alt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;
export const GetCategoriesDocument = new TypedDocumentString(`
    query GetCategories {
  categories {
    data {
      id
      slug
      name
    }
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoriesWithProductsDocument = new TypedDocumentString(`
    query GetCategoriesWithProducts {
  categories {
    data {
      id
      slug
      name
      products {
        id
        name
        price
        rating
        images {
          url
          alt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCategoriesWithProductsQuery, GetCategoriesWithProductsQueryVariables>;
export const GetCollectionDocument = new TypedDocumentString(`
    query GetCollection($slug: String!) {
  collection(slug: $slug) {
    id
    name
    slug
    description
    products {
      id
      slug
      name
      price
      rating
      images {
        url
        alt
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetCollectionsDocument = new TypedDocumentString(`
    query GetCollections {
  collections {
    data {
      name
      slug
      id
    }
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetProductByIdDocument = new TypedDocumentString(`
    query GetProductById($id: ID!) {
  product(id: $id) {
    id
    name
    description
    categories {
      name
      slug
      id
    }
    price
    images {
      url
      alt
    }
    reviews {
      id
    }
    rating
  }
}
    `) as unknown as TypedDocumentString<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query GetProducts($take: Int!, $skip: Int!, $orderBy: ProductSortBy = DEFAULT, $order: SortDirection = ASC) {
  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {
    meta {
      total
    }
    data {
      id
      name
      price
      rating
      images {
        url
        alt
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsByNameDocument = new TypedDocumentString(`
    query GetProductsByName($search: String!) {
  products(search: $search) {
    meta {
      total
    }
    data {
      id
      name
      price
      rating
      images {
        url
        alt
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetProductsByNameQuery, GetProductsByNameQueryVariables>;
export const GetTotalNumberOfCategoriesDocument = new TypedDocumentString(`
    query GetTotalNumberOfCategories {
  categories {
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<GetTotalNumberOfCategoriesQuery, GetTotalNumberOfCategoriesQueryVariables>;
export const GetTotalNumberOfProductsDocument = new TypedDocumentString(`
    query GetTotalNumberOfProducts {
  products {
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<GetTotalNumberOfProductsQuery, GetTotalNumberOfProductsQueryVariables>;