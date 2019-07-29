# Some GraphQL Queries

```graphql
query {
  userSerieses(where: { user: { id: "cjyoxcng626j10790izkyhdpb" } }) {
  	series { name }
  }
  userSeriesesConnection(where: { user: { id: "cjyoxcng626j10790izkyhdpb" } }) {
    aggregate { count }
  }
}
```


```` graphql
query {
  watchedEpisodes(where: 
    {
      watched: true,
      AND: { 
        episode:{
          season: {
            series: {
              name_contains: "Game of Thrones"
            }
          }
        },
        AND: {episode: {number: 1}, AND: {episode:{season: {number: 1}}}}
      }
    }) {
    user {name}
    episode {
      name
      id
      season {
        series {
          name
        }
      }
    }
  }
}
```

```graphql
query {
  serieses(where: {
    id: 42509,
    AND: {
      seasons_some: { number: 2 },
      AND: {
        seasons_some: {
          episodes_some: {
            number: 1
          }
        }
      }
    }
  }) {
    id,
    name,
    seasons{
      episodes {
      	number
    	}
    },
    count
  }
}
```


