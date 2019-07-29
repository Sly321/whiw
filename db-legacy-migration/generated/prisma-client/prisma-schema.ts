// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateEpisode {
  count: Int!
}

type AggregateSeason {
  count: Int!
}

type AggregateSeries {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserSeries {
  count: Int!
}

type AggregateWatchedEpisode {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Episode {
  id: ID!
  name: String
  number: Int!
  release: DateTime
  season: Season!
}

type EpisodeConnection {
  pageInfo: PageInfo!
  edges: [EpisodeEdge]!
  aggregate: AggregateEpisode!
}

input EpisodeCreateInput {
  id: ID
  name: String
  number: Int!
  release: DateTime
  season: SeasonCreateOneWithoutEpisodesInput!
}

input EpisodeCreateManyWithoutSeasonInput {
  create: [EpisodeCreateWithoutSeasonInput!]
  connect: [EpisodeWhereUniqueInput!]
}

input EpisodeCreateOneInput {
  create: EpisodeCreateInput
  connect: EpisodeWhereUniqueInput
}

input EpisodeCreateWithoutSeasonInput {
  id: ID
  name: String
  number: Int!
  release: DateTime
}

type EpisodeEdge {
  node: Episode!
  cursor: String!
}

enum EpisodeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  number_ASC
  number_DESC
  release_ASC
  release_DESC
}

type EpisodePreviousValues {
  id: ID!
  name: String
  number: Int!
  release: DateTime
}

input EpisodeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  release: DateTime
  release_not: DateTime
  release_in: [DateTime!]
  release_not_in: [DateTime!]
  release_lt: DateTime
  release_lte: DateTime
  release_gt: DateTime
  release_gte: DateTime
  AND: [EpisodeScalarWhereInput!]
  OR: [EpisodeScalarWhereInput!]
  NOT: [EpisodeScalarWhereInput!]
}

type EpisodeSubscriptionPayload {
  mutation: MutationType!
  node: Episode
  updatedFields: [String!]
  previousValues: EpisodePreviousValues
}

input EpisodeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EpisodeWhereInput
  AND: [EpisodeSubscriptionWhereInput!]
  OR: [EpisodeSubscriptionWhereInput!]
  NOT: [EpisodeSubscriptionWhereInput!]
}

input EpisodeUpdateDataInput {
  name: String
  number: Int
  release: DateTime
  season: SeasonUpdateOneRequiredWithoutEpisodesInput
}

input EpisodeUpdateInput {
  name: String
  number: Int
  release: DateTime
  season: SeasonUpdateOneRequiredWithoutEpisodesInput
}

input EpisodeUpdateManyDataInput {
  name: String
  number: Int
  release: DateTime
}

input EpisodeUpdateManyMutationInput {
  name: String
  number: Int
  release: DateTime
}

input EpisodeUpdateManyWithoutSeasonInput {
  create: [EpisodeCreateWithoutSeasonInput!]
  delete: [EpisodeWhereUniqueInput!]
  connect: [EpisodeWhereUniqueInput!]
  set: [EpisodeWhereUniqueInput!]
  disconnect: [EpisodeWhereUniqueInput!]
  update: [EpisodeUpdateWithWhereUniqueWithoutSeasonInput!]
  upsert: [EpisodeUpsertWithWhereUniqueWithoutSeasonInput!]
  deleteMany: [EpisodeScalarWhereInput!]
  updateMany: [EpisodeUpdateManyWithWhereNestedInput!]
}

input EpisodeUpdateManyWithWhereNestedInput {
  where: EpisodeScalarWhereInput!
  data: EpisodeUpdateManyDataInput!
}

input EpisodeUpdateOneRequiredInput {
  create: EpisodeCreateInput
  update: EpisodeUpdateDataInput
  upsert: EpisodeUpsertNestedInput
  connect: EpisodeWhereUniqueInput
}

input EpisodeUpdateWithoutSeasonDataInput {
  name: String
  number: Int
  release: DateTime
}

input EpisodeUpdateWithWhereUniqueWithoutSeasonInput {
  where: EpisodeWhereUniqueInput!
  data: EpisodeUpdateWithoutSeasonDataInput!
}

input EpisodeUpsertNestedInput {
  update: EpisodeUpdateDataInput!
  create: EpisodeCreateInput!
}

input EpisodeUpsertWithWhereUniqueWithoutSeasonInput {
  where: EpisodeWhereUniqueInput!
  update: EpisodeUpdateWithoutSeasonDataInput!
  create: EpisodeCreateWithoutSeasonInput!
}

input EpisodeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  release: DateTime
  release_not: DateTime
  release_in: [DateTime!]
  release_not_in: [DateTime!]
  release_lt: DateTime
  release_lte: DateTime
  release_gt: DateTime
  release_gte: DateTime
  season: SeasonWhereInput
  AND: [EpisodeWhereInput!]
  OR: [EpisodeWhereInput!]
  NOT: [EpisodeWhereInput!]
}

input EpisodeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEpisode(data: EpisodeCreateInput!): Episode!
  updateEpisode(data: EpisodeUpdateInput!, where: EpisodeWhereUniqueInput!): Episode
  updateManyEpisodes(data: EpisodeUpdateManyMutationInput!, where: EpisodeWhereInput): BatchPayload!
  upsertEpisode(where: EpisodeWhereUniqueInput!, create: EpisodeCreateInput!, update: EpisodeUpdateInput!): Episode!
  deleteEpisode(where: EpisodeWhereUniqueInput!): Episode
  deleteManyEpisodes(where: EpisodeWhereInput): BatchPayload!
  createSeason(data: SeasonCreateInput!): Season!
  updateSeason(data: SeasonUpdateInput!, where: SeasonWhereUniqueInput!): Season
  updateManySeasons(data: SeasonUpdateManyMutationInput!, where: SeasonWhereInput): BatchPayload!
  upsertSeason(where: SeasonWhereUniqueInput!, create: SeasonCreateInput!, update: SeasonUpdateInput!): Season!
  deleteSeason(where: SeasonWhereUniqueInput!): Season
  deleteManySeasons(where: SeasonWhereInput): BatchPayload!
  createSeries(data: SeriesCreateInput!): Series!
  updateSeries(data: SeriesUpdateInput!, where: SeriesWhereUniqueInput!): Series
  updateManySerieses(data: SeriesUpdateManyMutationInput!, where: SeriesWhereInput): BatchPayload!
  upsertSeries(where: SeriesWhereUniqueInput!, create: SeriesCreateInput!, update: SeriesUpdateInput!): Series!
  deleteSeries(where: SeriesWhereUniqueInput!): Series
  deleteManySerieses(where: SeriesWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserSeries(data: UserSeriesCreateInput!): UserSeries!
  updateUserSeries(data: UserSeriesUpdateInput!, where: UserSeriesWhereUniqueInput!): UserSeries
  upsertUserSeries(where: UserSeriesWhereUniqueInput!, create: UserSeriesCreateInput!, update: UserSeriesUpdateInput!): UserSeries!
  deleteUserSeries(where: UserSeriesWhereUniqueInput!): UserSeries
  deleteManyUserSerieses(where: UserSeriesWhereInput): BatchPayload!
  createWatchedEpisode(data: WatchedEpisodeCreateInput!): WatchedEpisode!
  updateWatchedEpisode(data: WatchedEpisodeUpdateInput!, where: WatchedEpisodeWhereUniqueInput!): WatchedEpisode
  upsertWatchedEpisode(where: WatchedEpisodeWhereUniqueInput!, create: WatchedEpisodeCreateInput!, update: WatchedEpisodeUpdateInput!): WatchedEpisode!
  deleteWatchedEpisode(where: WatchedEpisodeWhereUniqueInput!): WatchedEpisode
  deleteManyWatchedEpisodes(where: WatchedEpisodeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  episode(where: EpisodeWhereUniqueInput!): Episode
  episodes(where: EpisodeWhereInput, orderBy: EpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Episode]!
  episodesConnection(where: EpisodeWhereInput, orderBy: EpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EpisodeConnection!
  season(where: SeasonWhereUniqueInput!): Season
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season]!
  seasonsConnection(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeasonConnection!
  series(where: SeriesWhereUniqueInput!): Series
  serieses(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Series]!
  seriesesConnection(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeriesConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userSeries(where: UserSeriesWhereUniqueInput!): UserSeries
  userSerieses(where: UserSeriesWhereInput, orderBy: UserSeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserSeries]!
  userSeriesesConnection(where: UserSeriesWhereInput, orderBy: UserSeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserSeriesConnection!
  watchedEpisode(where: WatchedEpisodeWhereUniqueInput!): WatchedEpisode
  watchedEpisodes(where: WatchedEpisodeWhereInput, orderBy: WatchedEpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WatchedEpisode]!
  watchedEpisodesConnection(where: WatchedEpisodeWhereInput, orderBy: WatchedEpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WatchedEpisodeConnection!
  node(id: ID!): Node
}

type Season {
  id: ID!
  number: Int!
  episodes(where: EpisodeWhereInput, orderBy: EpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Episode!]
  series: Series!
}

type SeasonConnection {
  pageInfo: PageInfo!
  edges: [SeasonEdge]!
  aggregate: AggregateSeason!
}

input SeasonCreateInput {
  id: ID
  number: Int!
  episodes: EpisodeCreateManyWithoutSeasonInput
  series: SeriesCreateOneWithoutSeasonsInput!
}

input SeasonCreateManyWithoutSeriesInput {
  create: [SeasonCreateWithoutSeriesInput!]
  connect: [SeasonWhereUniqueInput!]
}

input SeasonCreateOneWithoutEpisodesInput {
  create: SeasonCreateWithoutEpisodesInput
  connect: SeasonWhereUniqueInput
}

input SeasonCreateWithoutEpisodesInput {
  id: ID
  number: Int!
  series: SeriesCreateOneWithoutSeasonsInput!
}

input SeasonCreateWithoutSeriesInput {
  id: ID
  number: Int!
  episodes: EpisodeCreateManyWithoutSeasonInput
}

type SeasonEdge {
  node: Season!
  cursor: String!
}

enum SeasonOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
}

type SeasonPreviousValues {
  id: ID!
  number: Int!
}

input SeasonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  AND: [SeasonScalarWhereInput!]
  OR: [SeasonScalarWhereInput!]
  NOT: [SeasonScalarWhereInput!]
}

type SeasonSubscriptionPayload {
  mutation: MutationType!
  node: Season
  updatedFields: [String!]
  previousValues: SeasonPreviousValues
}

input SeasonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeasonWhereInput
  AND: [SeasonSubscriptionWhereInput!]
  OR: [SeasonSubscriptionWhereInput!]
  NOT: [SeasonSubscriptionWhereInput!]
}

input SeasonUpdateInput {
  number: Int
  episodes: EpisodeUpdateManyWithoutSeasonInput
  series: SeriesUpdateOneRequiredWithoutSeasonsInput
}

input SeasonUpdateManyDataInput {
  number: Int
}

input SeasonUpdateManyMutationInput {
  number: Int
}

input SeasonUpdateManyWithoutSeriesInput {
  create: [SeasonCreateWithoutSeriesInput!]
  delete: [SeasonWhereUniqueInput!]
  connect: [SeasonWhereUniqueInput!]
  set: [SeasonWhereUniqueInput!]
  disconnect: [SeasonWhereUniqueInput!]
  update: [SeasonUpdateWithWhereUniqueWithoutSeriesInput!]
  upsert: [SeasonUpsertWithWhereUniqueWithoutSeriesInput!]
  deleteMany: [SeasonScalarWhereInput!]
  updateMany: [SeasonUpdateManyWithWhereNestedInput!]
}

input SeasonUpdateManyWithWhereNestedInput {
  where: SeasonScalarWhereInput!
  data: SeasonUpdateManyDataInput!
}

input SeasonUpdateOneRequiredWithoutEpisodesInput {
  create: SeasonCreateWithoutEpisodesInput
  update: SeasonUpdateWithoutEpisodesDataInput
  upsert: SeasonUpsertWithoutEpisodesInput
  connect: SeasonWhereUniqueInput
}

input SeasonUpdateWithoutEpisodesDataInput {
  number: Int
  series: SeriesUpdateOneRequiredWithoutSeasonsInput
}

input SeasonUpdateWithoutSeriesDataInput {
  number: Int
  episodes: EpisodeUpdateManyWithoutSeasonInput
}

input SeasonUpdateWithWhereUniqueWithoutSeriesInput {
  where: SeasonWhereUniqueInput!
  data: SeasonUpdateWithoutSeriesDataInput!
}

input SeasonUpsertWithoutEpisodesInput {
  update: SeasonUpdateWithoutEpisodesDataInput!
  create: SeasonCreateWithoutEpisodesInput!
}

input SeasonUpsertWithWhereUniqueWithoutSeriesInput {
  where: SeasonWhereUniqueInput!
  update: SeasonUpdateWithoutSeriesDataInput!
  create: SeasonCreateWithoutSeriesInput!
}

input SeasonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  episodes_every: EpisodeWhereInput
  episodes_some: EpisodeWhereInput
  episodes_none: EpisodeWhereInput
  series: SeriesWhereInput
  AND: [SeasonWhereInput!]
  OR: [SeasonWhereInput!]
  NOT: [SeasonWhereInput!]
}

input SeasonWhereUniqueInput {
  id: ID
}

type Series {
  id: ID!
  name: String!
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season!]
}

type SeriesConnection {
  pageInfo: PageInfo!
  edges: [SeriesEdge]!
  aggregate: AggregateSeries!
}

input SeriesCreateInput {
  id: ID
  name: String!
  seasons: SeasonCreateManyWithoutSeriesInput
}

input SeriesCreateOneInput {
  create: SeriesCreateInput
  connect: SeriesWhereUniqueInput
}

input SeriesCreateOneWithoutSeasonsInput {
  create: SeriesCreateWithoutSeasonsInput
  connect: SeriesWhereUniqueInput
}

input SeriesCreateWithoutSeasonsInput {
  id: ID
  name: String!
}

type SeriesEdge {
  node: Series!
  cursor: String!
}

enum SeriesOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type SeriesPreviousValues {
  id: ID!
  name: String!
}

type SeriesSubscriptionPayload {
  mutation: MutationType!
  node: Series
  updatedFields: [String!]
  previousValues: SeriesPreviousValues
}

input SeriesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeriesWhereInput
  AND: [SeriesSubscriptionWhereInput!]
  OR: [SeriesSubscriptionWhereInput!]
  NOT: [SeriesSubscriptionWhereInput!]
}

input SeriesUpdateDataInput {
  name: String
  seasons: SeasonUpdateManyWithoutSeriesInput
}

input SeriesUpdateInput {
  name: String
  seasons: SeasonUpdateManyWithoutSeriesInput
}

input SeriesUpdateManyMutationInput {
  name: String
}

input SeriesUpdateOneRequiredInput {
  create: SeriesCreateInput
  update: SeriesUpdateDataInput
  upsert: SeriesUpsertNestedInput
  connect: SeriesWhereUniqueInput
}

input SeriesUpdateOneRequiredWithoutSeasonsInput {
  create: SeriesCreateWithoutSeasonsInput
  update: SeriesUpdateWithoutSeasonsDataInput
  upsert: SeriesUpsertWithoutSeasonsInput
  connect: SeriesWhereUniqueInput
}

input SeriesUpdateWithoutSeasonsDataInput {
  name: String
}

input SeriesUpsertNestedInput {
  update: SeriesUpdateDataInput!
  create: SeriesCreateInput!
}

input SeriesUpsertWithoutSeasonsInput {
  update: SeriesUpdateWithoutSeasonsDataInput!
  create: SeriesCreateWithoutSeasonsInput!
}

input SeriesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  seasons_every: SeasonWhereInput
  seasons_some: SeasonWhereInput
  seasons_none: SeasonWhereInput
  AND: [SeriesWhereInput!]
  OR: [SeriesWhereInput!]
  NOT: [SeriesWhereInput!]
}

input SeriesWhereUniqueInput {
  id: ID
}

type Subscription {
  episode(where: EpisodeSubscriptionWhereInput): EpisodeSubscriptionPayload
  season(where: SeasonSubscriptionWhereInput): SeasonSubscriptionPayload
  series(where: SeriesSubscriptionWhereInput): SeriesSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userSeries(where: UserSeriesSubscriptionWhereInput): UserSeriesSubscriptionPayload
  watchedEpisode(where: WatchedEpisodeSubscriptionWhereInput): WatchedEpisodeSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  watched(where: WatchedEpisodeWhereInput, orderBy: WatchedEpisodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WatchedEpisode!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  watched: WatchedEpisodeCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSeries {
  id: ID!
  user: User!
  series: Series!
}

type UserSeriesConnection {
  pageInfo: PageInfo!
  edges: [UserSeriesEdge]!
  aggregate: AggregateUserSeries!
}

input UserSeriesCreateInput {
  id: ID
  user: UserCreateOneInput!
  series: SeriesCreateOneInput!
}

input UserSeriesCreateOneInput {
  create: UserSeriesCreateInput
  connect: UserSeriesWhereUniqueInput
}

type UserSeriesEdge {
  node: UserSeries!
  cursor: String!
}

enum UserSeriesOrderByInput {
  id_ASC
  id_DESC
}

type UserSeriesPreviousValues {
  id: ID!
}

type UserSeriesSubscriptionPayload {
  mutation: MutationType!
  node: UserSeries
  updatedFields: [String!]
  previousValues: UserSeriesPreviousValues
}

input UserSeriesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserSeriesWhereInput
  AND: [UserSeriesSubscriptionWhereInput!]
  OR: [UserSeriesSubscriptionWhereInput!]
  NOT: [UserSeriesSubscriptionWhereInput!]
}

input UserSeriesUpdateDataInput {
  user: UserUpdateOneRequiredInput
  series: SeriesUpdateOneRequiredInput
}

input UserSeriesUpdateInput {
  user: UserUpdateOneRequiredInput
  series: SeriesUpdateOneRequiredInput
}

input UserSeriesUpdateOneRequiredInput {
  create: UserSeriesCreateInput
  update: UserSeriesUpdateDataInput
  upsert: UserSeriesUpsertNestedInput
  connect: UserSeriesWhereUniqueInput
}

input UserSeriesUpsertNestedInput {
  update: UserSeriesUpdateDataInput!
  create: UserSeriesCreateInput!
}

input UserSeriesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  series: SeriesWhereInput
  AND: [UserSeriesWhereInput!]
  OR: [UserSeriesWhereInput!]
  NOT: [UserSeriesWhereInput!]
}

input UserSeriesWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  watched: WatchedEpisodeUpdateManyInput
}

input UserUpdateInput {
  name: String
  watched: WatchedEpisodeUpdateManyInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  watched_every: WatchedEpisodeWhereInput
  watched_some: WatchedEpisodeWhereInput
  watched_none: WatchedEpisodeWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type WatchedEpisode {
  id: ID!
  userSeries: UserSeries!
  episode: Episode!
}

type WatchedEpisodeConnection {
  pageInfo: PageInfo!
  edges: [WatchedEpisodeEdge]!
  aggregate: AggregateWatchedEpisode!
}

input WatchedEpisodeCreateInput {
  id: ID
  userSeries: UserSeriesCreateOneInput!
  episode: EpisodeCreateOneInput!
}

input WatchedEpisodeCreateManyInput {
  create: [WatchedEpisodeCreateInput!]
  connect: [WatchedEpisodeWhereUniqueInput!]
}

type WatchedEpisodeEdge {
  node: WatchedEpisode!
  cursor: String!
}

enum WatchedEpisodeOrderByInput {
  id_ASC
  id_DESC
}

type WatchedEpisodePreviousValues {
  id: ID!
}

input WatchedEpisodeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [WatchedEpisodeScalarWhereInput!]
  OR: [WatchedEpisodeScalarWhereInput!]
  NOT: [WatchedEpisodeScalarWhereInput!]
}

type WatchedEpisodeSubscriptionPayload {
  mutation: MutationType!
  node: WatchedEpisode
  updatedFields: [String!]
  previousValues: WatchedEpisodePreviousValues
}

input WatchedEpisodeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WatchedEpisodeWhereInput
  AND: [WatchedEpisodeSubscriptionWhereInput!]
  OR: [WatchedEpisodeSubscriptionWhereInput!]
  NOT: [WatchedEpisodeSubscriptionWhereInput!]
}

input WatchedEpisodeUpdateDataInput {
  userSeries: UserSeriesUpdateOneRequiredInput
  episode: EpisodeUpdateOneRequiredInput
}

input WatchedEpisodeUpdateInput {
  userSeries: UserSeriesUpdateOneRequiredInput
  episode: EpisodeUpdateOneRequiredInput
}

input WatchedEpisodeUpdateManyInput {
  create: [WatchedEpisodeCreateInput!]
  update: [WatchedEpisodeUpdateWithWhereUniqueNestedInput!]
  upsert: [WatchedEpisodeUpsertWithWhereUniqueNestedInput!]
  delete: [WatchedEpisodeWhereUniqueInput!]
  connect: [WatchedEpisodeWhereUniqueInput!]
  set: [WatchedEpisodeWhereUniqueInput!]
  disconnect: [WatchedEpisodeWhereUniqueInput!]
  deleteMany: [WatchedEpisodeScalarWhereInput!]
}

input WatchedEpisodeUpdateWithWhereUniqueNestedInput {
  where: WatchedEpisodeWhereUniqueInput!
  data: WatchedEpisodeUpdateDataInput!
}

input WatchedEpisodeUpsertWithWhereUniqueNestedInput {
  where: WatchedEpisodeWhereUniqueInput!
  update: WatchedEpisodeUpdateDataInput!
  create: WatchedEpisodeCreateInput!
}

input WatchedEpisodeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userSeries: UserSeriesWhereInput
  episode: EpisodeWhereInput
  AND: [WatchedEpisodeWhereInput!]
  OR: [WatchedEpisodeWhereInput!]
  NOT: [WatchedEpisodeWhereInput!]
}

input WatchedEpisodeWhereUniqueInput {
  id: ID
}
`