import { Box, Text, type BoxProps } from '@rech-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

 
 export default {
   title: 'Surfaces/Box',
   component: Box,
   args: {
     children: (
         <Text>Testando o elemento Box</Text>
     ),
   },
   argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
 } as Meta<BoxProps>
 
 export const Primary: StoryObj<BoxProps> = {}