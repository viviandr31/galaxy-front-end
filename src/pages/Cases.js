import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CasesResults from '../components/cases/CasesResults';
import CasesToolbar from '../components/cases/CasesToolbar';
import customers from '../__mocks__/customers';

const Cases = () => (
  <>
    <Helmet>
      <title>Cases | Galaxy</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CasesToolbar />
        <Box sx={{ pt: 3 }}>
          <CasesResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Cases;
