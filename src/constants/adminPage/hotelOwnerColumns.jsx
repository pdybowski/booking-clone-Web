import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { Button } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'

export const hotelOwnerColumns = (loading, verify) => {
  return [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 200,
    },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'isVerified',
      headerName: 'Veryfied',
      width: 130,
      renderCell: (params) =>
        params.value === '1' ? (
          <VerifiedUserIcon color="secondary" />
        ) : !loading ? (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => verify(params.id)}
          >
            Verify
          </Button>
        ) : (
          <CircularProgress color="secondary" />
        ),
    },
  ]
}
