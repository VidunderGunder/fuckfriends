// This object will be used to override Mantine theme defaults.
// See https://mantine.dev/theming/mantine-provider/#theme-object for theming options

/** @type {import('@mantine/core').MantineThemeOverride} */
const theme = {
  // https://themera.vercel.app/
  colors: {
    purple: [
      '#F8ECF6',
      '#ECCBE5',
      '#E0A9D4',
      '#D388C4',
      '#C766B3',
      '#BB44A3',
      '#953782',
      '#702962',
      '#4B1B41',
      '#250E21',
    ],
    pink: [
      '#FCE8F6',
      '#F7C0E7',
      '#F197D8',
      '#EC6FC9',
      '#E746B9',
      '#E11EAA',
      '#B41888',
      '#871266',
      '#5A0C44',
      '#2D0622',
    ],
  },
  primaryColor: 'pink',
}

module.exports = theme
