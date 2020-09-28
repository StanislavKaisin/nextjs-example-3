import { GetStaticProps, NextPageContext } from "next";
import { Microphone } from "../../model/Micophone";
import { openDb } from "../openDb";
// import Head from 'next/head'
// import styles from "../../styles/Home.module.css";
import styles from "../../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

export interface HomeProps {
  microphones: Microphone[];
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Home({ microphones }: HomeProps) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {microphones.map((microphone) => {
        return (
          <Grid container item xs={12} sm={6} spacing={3}>
            <Link href="/microphone/[id]" as={`/microphone/${microphone.id}`}>
              <a>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={microphone.model + " " + microphone.brand}
                      height="200"
                      image={microphone.imageUrl}
                      title={microphone.model + " " + microphone.brand}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {microphone.brand + " " + microphone.model}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const db = await openDb();
  const microphones = await db.all(`select * from microphone`);
  return { props: { microphones } };
};
