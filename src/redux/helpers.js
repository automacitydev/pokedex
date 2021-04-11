export const getAbilities = (arr) => (
    arr.map(({ abilities }) =>
        abilities.map(({ ability }) =>
            ability.name))
)

export const getImages = (arr) => (
    arr.map(({ sprites }) =>
        sprites.front_default))

export const getNames = (arr) => (
    arr.map(({ name }) => name)
)

export const getStats = (arr) => (
    arr.map(({ stats }) =>
        stats.map(({ stat, base_stat }) =>
        ({
            name: stat.name,
            value: base_stat
        }))
    )
)

export const getIds = (arr) => (
    arr.map(({ id }) => id)
)

export const getTypes = (arr) => (
    arr.map(({ types }) =>
        types[0].type.name)
)