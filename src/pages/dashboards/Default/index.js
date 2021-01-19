//import React from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet";

import { testMolecular } from "../../../redux/actions/molecularActions";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";

import Actions from "./Actions";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import Stats from "./Stats";
import Table from "./Table";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

//import { bindActionCreators } from "redux";
//import { connect } from "react-redux";
//import { actionCreators } from "../../../../store/User";

//function Default() {
const Default = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.molecularReducer);

  console.log("test", dataCovid);

  // dispatch(
  //   testMolecular({
  //     startDate: "23/01/2020",
  //     endDate: "25/01/2020",
  //   })
  // );

  useEffect(() => {
    console.log("test", dataCovid);

    console.log("entrocovid");

    dispatch(
      testMolecular({
        startDate: "23/01/2020",
        endDate: "25/01/2020",
      })
    );
  }, [testMolecular]);

  return (
    <React.Fragment>
      <Helmet title="Dashboard Pruebas Moleculares" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard Pruebas Moleculares
          </Typography>
          <Typography variant="subtitle1">
            Bienvenido.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Pendiente"
            amount={dataCovid.data && dataCovid.data.slope}
            chip="Hoy"
            percentageText="+26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Positivos"
            amount={dataCovid.data && dataCovid.data.positive}
            chip="Annual"
            percentageText="-14%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Negativos"
            amount={dataCovid.data && dataCovid.data.negative}
            chip="Monthly"
            percentageText="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Total de Muestras"
            amount={dataCovid.data && dataCovid.data.total}
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <LineChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          {dataCovid.data && <DoughnutChart dataTabla={dataCovid.data} />}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Default;
