import React from "react";
import { FaReact, FaUserCircle, FaDumbbell, FaYoutube, FaBookReader } from "react-icons/fa";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider
} from "@material-ui/core";


const MenuItem = () => {

  return (
    <Grid style={{display:"flex"}}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FaUserCircle size="2em" />
          </ListItemIcon>
          <ListItemText primary="Yasmim Corrêa" />
        </ListItem>
        <Divider />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FaReact size="2em" />
          </ListItemIcon>
          <ListItemText primary="Matérias" />
        </ListItem>
        <Divider />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FaDumbbell size="2em" />
          </ListItemIcon>
          <ListItemText primary="Exercícios" />
        </ListItem>
        <Divider />
        <Divider />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FaYoutube size="2em" />
          </ListItemIcon>
          <ListItemText primary="Aulas ao vivo" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FaBookReader size="2em" />
          </ListItemIcon>
          <ListItemText primary="Simulados" />
        </ListItem>
      </List>
    </Grid>
  );
};
export default MenuItem;
