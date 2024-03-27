import { forwardRef } from 'react'

import { Box, MantineLoaderComponent } from '@mantine/core'
import cx from 'clsx'

import classes from './Loader.module.css'

export const Loader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box className={cx(classes.loader, className)} component={'span'} {...others} ref={ref} />
))
