import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import cx from 'clsx'

import classes from './ThemeSwitcher.module.css'

function ThemeSwitcher() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

  return (
    <ActionIcon
      aria-label={'Toggle color scheme'}
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      size={'xl'}
      variant={'default'}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  )
}
export default ThemeSwitcher
