import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { projects } from "../api/projectdata";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Portfoliogrid() {
  return (
    <Box sx={{ flexGrow: 1 }} maxWidth="lg" style={{ margin: 'auto' }}>
      <Grid container spacing={2}>
        {projects.map(({ id, image, subtitle, title, link }) => {
          return (
            <Grid xs={4}>
              <Item key={id}>
                <img
                  className="project-img"
                  src={image}
                  alt="content"
                />
                <h3>
                  {subtitle}
                </h3>
                <h2>
                  {title}
                </h2>
                <a href={link}>Go To Link</a>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
