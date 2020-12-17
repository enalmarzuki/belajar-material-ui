import React from "react";
import PageHeader from "../../components/PageHeader";
import PeopleTwoToneIcon from "@material-ui/icons/PeopleTwoTone";

import EmployessForm from "./EmployessForm";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleTwoToneIcon fontSize="large" />}
      />

      <Paper className={classes.pageContent}>
        <EmployessForm />
      </Paper>
    </>
  );
}
