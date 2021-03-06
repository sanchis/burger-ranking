
export const SHOP_LIST_ACTIVE = `
query Shops {
  shopsActive {
    id
    name
    address
    image
    description
  }
}`

export const SHOP_DETAIL = `
query Shop($shopId: ID!) {
  shop(id: $shopId) {
    id
    name
    address
    image
    description
    gMapsHash
  }
}`

export const BURGER_IN_SHOP = `
query Query($shopId: ID!) {
  burgerInShop(shopId: $shopId) {
    id
    name
    description
    image
    price
    numberOfMarks
  }
}
`

export const MARK_IN_BURGER = `
query MarksInBurger($burgerId: String!) {
  marksInBurger(burgerId: $burgerId) {
    id
    mark
    comment
    createdAt
  }
}`

export const CREATE_MARK = `
mutation Mutation($burgerId: String!, $mark: Int!, $comment: String!) {
  createMark(burgerId: $burgerId, mark: $mark, comment: $comment) {
    id
    mark
    createdAt
    comment
  }
}
`
