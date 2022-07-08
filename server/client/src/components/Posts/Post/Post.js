import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@material-ui/core/"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from './styles';
import  moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts'
const Post =({post,setCurrentId})=>{
    const classes= useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia classname={classes.media} image={Post.selectedFile} title={post.title}/>
<div className={classes.overlay}>
     <Typography varient="h6">{post.creator}</Typography>
     <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
</div>
<div className={classes.overlay2}>
    <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._Id)}>
       < MoreMorizIcon fontSize="default"/>
    </Button>
</div>
<div className={classes.details}>
    <Typography varient="body2" color="textSecondary">{post.tags.map((tag) =>`#${tag} `)}</Typography>

</div>
<Typography   className={classes.title}  varient="h5" gutterBottom>{post.title}</Typography>

<CardContent>
<Typography    varient="h5" gutterBottom>{post.message}</Typography>
 
</CardContent>
<CardActions className={classes.cardActions}>
    <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
      <ThumbUpAltIcon fontSize="small"/>
     &nbsp Like &nbsp
       {post.likeCount}

    </Button>
    <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
      <DeleteIcon fontSize="small"/>
      Delete
    </Button>

</CardActions>

       </Card>
        )
}
export default Post;