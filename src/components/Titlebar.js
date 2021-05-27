import React from 'react';
import Box from '@material-ui/core/Box';
import theme from './Theme';


export default function Titlebar() {
  return (
    <Box bgcolor={theme.palette.primary.light} width="100%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignContent="center">
      <Box bgcolor={theme.palette.primary.main} width="100%" height="20px" />
      <Box color='white' width="auto" height="30px" p={2} my={0.5} fontSize="40px" fontFamily="Arial" fontWeight="bold">
        Todo-List
      </Box>
    </Box>
  );
}

