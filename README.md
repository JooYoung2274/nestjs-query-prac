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
- createManyBoards
- updateOneBoard
- updateManyBoards
- deleteOneBoard
- deleteManyBoards
