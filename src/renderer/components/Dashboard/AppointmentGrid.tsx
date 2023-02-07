import { Button, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { BiChat } from 'react-icons/bi';

type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  doctorSpeciality: string;
  doctorLevel: string;
  centerName: string;
  centerDistrictAndCity: string;
  appointmentDate: string;
  appointmentPrice: string;
  notes: string;
};

const columns: GridColDef<Appointment>[] = [
  {
    field: 'id',
    headerName: 'ID No.',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'patientName',
    headerName: 'Patient Name',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    resizable: true,
    flex: 1,
  },
  {
    field: 'doctorName',
    headerName: 'Doctor Name',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'doctorSpeciality',
    headerName: 'Speciality',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: 'doctorLevel',
    headerName: 'Level',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'centerName',
    headerName: 'Center Name',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'centerDistrictAndCity',
    headerName: 'District/City',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'appointmentDate',
    headerName: 'Appt. Time',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'appointmentPrice',
    headerName: 'Appt. Price',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 1,
  },
  {
    field: '-',
    headerName: 'Actions',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    flex: 3,
    renderCell: () => {
      return (
        <Grid container display="flex" flexDirection="row" spacing={1}>
          <Grid item>
            <Button color="primary" size="small" variant="outlined">
              Modify
            </Button>
          </Grid>
          <Grid item>
            <Button color="error" size="small" variant="outlined">
              Refuse
            </Button>
          </Grid>
          <Grid item>
            <Button color="success" size="small" variant="outlined">
              Accept
            </Button>
          </Grid>
          <Grid item>
            <IconButton>
              <BiChat size="24" />
            </IconButton>
          </Grid>
        </Grid>
      );
    },
  },
];

const rows: Appointment[] = [
  {
    id: 1,
    patientName: 'John Doe',
    doctorName: 'Dr. John Doe',
    doctorSpeciality: 'Cardiology',
    doctorLevel: 'Level 1',
    centerName: 'Center 1',
    centerDistrictAndCity: 'District 1',
    appointmentDate: '2021-10-10 10:00',
    appointmentPrice: '1000',
    notes: 'No notes',
  },
  // add dummy appintments
  {
    id: 2,
    patientName: 'John Doe',
    doctorName: 'Dr. John Doe',
    doctorSpeciality: 'Cardiology',
    doctorLevel: 'Level 1',
    centerName: 'Center 1',
    centerDistrictAndCity: 'District 1',
    appointmentDate: '2021-10-10 10:00',
    appointmentPrice: '1000',
    notes: 'No notes',
  },
  {
    id: 3,
    patientName: 'John Doe',
    doctorName: 'Dr. John Doe',
    doctorSpeciality: 'Cardiology',
    doctorLevel: 'Level 1',
    centerName: 'Center 1',
    centerDistrictAndCity: 'District 1',
    appointmentDate: '2021-10-10 10:00',
    appointmentPrice: '1000',
    notes: 'No notes',
  },
  {
    id: 4,
    patientName: 'John Doe',
    doctorName: 'Dr. John Doe',
    doctorSpeciality: 'Cardiology',
    doctorLevel: 'Level 1',
    centerName: 'Center 1',
    centerDistrictAndCity: 'District 1',
    appointmentDate: '2021-10-10 10:00',
    appointmentPrice: '1000',
    notes: 'No notes',
  },
];

export default function AppointGrid() {
  return (
    <Box
      sx={{
        mt: 2,
        height: '77%',
        width: '100%',
        borderRadius: '13px',
        bgcolor: 'white',
        p: 2,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection={false}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        disableVirtualization
      />
    </Box>
  );
}
