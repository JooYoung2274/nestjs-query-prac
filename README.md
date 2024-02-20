CRUD 예시

조건

```typescript
resolvers: [
        {
          EntityClass: BoardEntity,
          DTOClass: BoardEntity,
          CreateDTOClass: BoardCreateDTO,
          UpdateDTOClass: BoardUpdateDTO,
          ServiceClass: BoardService,
          enableAggregate: true,
          pagingStrategy: PagingStrategies.OFFSET,
          read: {},
          create: {},
          update: { one: { disabled: true } },
          delete: { many: { disabled: true } },
          guards: [],
        },
      ],
```

### 쿼리 예시

- board

```typescript
const Query = `
query GetBoard {
  board($id:Int!){
    id
    title
    description
    createdAt
    updatedAt
  }
}`;

// 리턴 값
```

- boards

```typescript
const Query = `
query GetBoards {
  boards(){
    id
    title
    description
    createdAt
    updatedAt
  }
}`;

// 리턴 값
```

- createOneBoard

```typescript
const Mutataion = `
mutation CreateOneBoard {
  createOneBoard(title: String!, description: String!){
    id
    title
    description
    createdAt
    updatedAt
  }
}`;

// 리턴 값
```

- createManyBoards

```typescript
const Mutataion = `
mutation CreateManyBoards {
  createManyBoards(input: CreateManyBoardsInput!){
    id
    title
    description
    createdAt
    updatedAt
  }
}`;

type CreateManyBoardsInput {
  Boards : {
    id: ID
    title: String!
    description: String!
    createdAt: Datetime
    updatedAt: Datetime
  }
}

// 리턴 값
```

- updateOneBoard
- updateManyBoards
- deleteOneBoard
- deleteManyBoards
