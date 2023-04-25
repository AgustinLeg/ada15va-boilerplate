import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext'

export const LangMenu = () => {
  const { lang, changeLang } = useContext(LangContext)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {lang === 'es' ? 'Español' : 'English'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLang('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLang('es')}>Español</MenuItem>
      </MenuList>
    </Menu>
  )
}
