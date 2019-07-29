import { prisma, SeasonCreateWithoutSeriesInput, EpisodeCreateWithoutSeasonInput, Series, User, UserSeries, UserSeriesPromise } from './generated/prisma-client'

import db from "./exported/viewcachu-firebase-export.json"

import { SeriesFirebase, EpisodeFirebase, SeasonFirebase, UserFirebase } from './legacy/types'

function createEpisodes(episodes: Array<EpisodeFirebase>) {
	if (!Array.isArray(episodes)) {
		return []
	}

	return episodes.map<EpisodeCreateWithoutSeasonInput>(({ name, airDate, episode }) => {
		return {
			name,
			release: airDate || null,
			number: episode
		}
	})
}

function createSeasons(seasons: Array<SeasonFirebase>) {
	if (!Array.isArray(seasons)) {
		return []
	}

	return seasons.map<SeasonCreateWithoutSeriesInput>(({ episodes, seasonNumber }) => {
		return {
			number: seasonNumber,
			episodes: {
				create: createEpisodes(episodes)
			}
		}
	})
}

async function createSeries(series: SeriesFirebase): Promise<Series> {
	return await prisma.createSeries({
		id: series.id,
		seasons: { 
			create: createSeasons(series.seasons)
		},
		name: series.name
	})
}

async function checkWatchedEpisodes({ seasons, id }: SeriesFirebase, userSeries: UserSeries) {
	return new Promise(async (res) => {
		if (Array.isArray(seasons)) {
			for (const season of seasons) {
				if (Array.isArray(season.episodes)) {
					for (const episode of season.episodes) {
						const newEpi = await prisma.episodes({ where: 
							{ season: 
								{ series: 
									{ id }
								},
								AND: {
									season: {
										number: season.seasonNumber
									},
									AND: {
										number: episode.episode
									}
								},
							}
						})

						if (newEpi.length === 1) {
							await prisma.createWatchedEpisode({
								episode: {
									connect: {
										id: newEpi[0].id
									}
								},
								userSeries: {
									connect: {
										id: userSeries.id
									}
								}
							})
						} else {
							console.log (`More than 1 Episode found: { seriesId: ${id}, season: ${season.seasonNumber}, episode: ${episode.episode} }`)
						}
					}
				}
			}
		}	
		res()
	})
}

async function addSeriesToUserSeriesList(series: Series, user: User): Promise<UserSeries> {
	return prisma.createUserSeries({
		series: { connect: { id: series.id }},
		user: { connect: { id: user.id }}
	})
}

// A `main` function so that we can use async/await
async function main() {
	const keys = Object.keys((db as any).users)

	for (const key of keys) {
		const legacyUser = db["users"][key] as UserFirebase
		const prismaUser = await prisma.createUser({ name: legacyUser.name })
		console.log("Creating User: ", prismaUser.name)

		await Promise.all(Object.keys(legacyUser.series).map((key) => {
			return new Promise(async (res) => {

				const legacySeries = legacyUser.series[key] as SeriesFirebase
				let series = await prisma.series({ id: legacySeries.id })
				
				if (series === null) {
					series = await createSeries(legacySeries)	
				}

				const userSeries = await addSeriesToUserSeriesList(series, prismaUser)
				await checkWatchedEpisodes(legacySeries, userSeries)
				
				res()
			})
		}))
	}

	

//   const series = await prisma.createSeries({
//     seasons: { 
//       create: singleSeries.seasons.map<SeasonCreateWithoutSeriesInput>(season => {
// 			return {
// 				number: season.seasonNumber.toString(),
// 				episodes: {
// 					create: season.episodes.map<EpisodeCreateWithoutSeasonInput>(({ name }) => {
// 						return {
// 							name: name
// 						}
// 					})
// 				}
// 			}
// 		})
// 	  },
//   })

//   const seriesGet = await prisma.episodes({ where: { season: { series: { id: series.id }}}})

//   const watched = await prisma.createWatchedEpisode({
// 	  episode: {
// 		  connect: {
// 			  id: seriesGet[0].id
// 		  }
// 	  },
// 	  user: {
// 		  connect: {
// 			  id: user.id
// 		  }
// 	  },
// 	  watched: true
//   })

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))