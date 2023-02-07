import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

type CustomCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  sx?: any;
};

export default function CustomCheckbox({
  checked,
  onChange,
  label,
  sx,
}: CustomCheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!isChecked);
    onChange(!isChecked);
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Box
      sx={{
        borderRadius: '28px',
        border: `1px solid ${isChecked ? '#39BCC0' : '#E1E1E1'}`,
        boxShadow: isChecked
          ? '0px 4px 13px 2px rgba(57, 188, 192, 0.12)'
          : 'none',
        color: isChecked ? '#616161' : '#999999',
        cursor: 'pointer',
        p: 1,
        ...sx,
      }}
      onClick={handleClick}
    >
      <Grid container alignItems="center">
        <Grid item xs={2} display="flex" alignItems="center">
          {isChecked ? (
            <AiFillCheckCircle fontSize={40} color="#39BCC0" />
          ) : (
            <RiCheckboxBlankCircleFill fontSize={40} color="#E1E1E1" />
          )}
        </Grid>
        <Grid item xs={10}>
          <Typography
            sx={{
              userSelect: 'none',
            }}
          >
            {label}
          </Typography>
        </Grid>
      </Grid>
      <Box></Box>
    </Box>
  );
}
