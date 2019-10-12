import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Topper from "../../assets/images/IMG_20190329_222622.jpg";

const posts = [
  {
    title: "My first post",
    excerpt: "This is my first post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  },

  {
    title: "My second post",
    excerpt: "This is my second post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  },

  {
    title: "My third post",
    excerpt: "This is my third post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  },

  {
    title: "My fourth post",
    excerpt: "This is my fourth post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  },

  {
    title: "My fifth post",
    excerpt: "This is my fifth post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  },

  {
    title: "My sixth post",
    excerpt: "This is my sixth post with more content inside",
    image: "https://bit.ly/2WNi2Ml"
  }
];

function Posts(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <h1>In Posts</h1>
      <Grid container spacing={40} justify="space-around">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card style={{ maxWidth: 345, marginBottom: 30 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{
                    objectFit: "cover"
                   }}
                  image={Topper}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
